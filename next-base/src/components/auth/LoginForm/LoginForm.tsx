import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FC, useEffect, useState } from 'react'
import { stack } from 'utils/mui'
import styles from './LoginForm.styles'
import { useFormik, FormikConfig } from 'formik'
import { objectSome } from 'object-fn-ts/lib'
import isEmpty from 'is-empty'
import Schemas from '../schemas'

type State = {
  email: string,
  password: string,
}

type props = {
  title?: string,
  titleVariant?: 'h1' | 'h2' | 'h3',
  onLogin: FormikConfig<State>["onSubmit"]
}

const LoginForm: FC<props> = ({
  title,
  titleVariant = 'h2',
  onLogin
}) => {

  const [ showPassword, setShowPassword ] = useState(false)
  const [ btnDisabled, setBtnDisabled ] = useState(false)

  const formik = useFormik<State>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Schemas.login,
    onSubmit: onLogin,
    validateOnChange: true,
  })

  useEffect(() => {
    setBtnDisabled(
      !formik.isValid
      || objectSome(formik.touched, (_, val) => !val)
      || isEmpty(formik.touched)
    )
  }, [ formik ])

  return (
    <Stack { ...stack.flex.col('center', 'flex-start') } spacing={ 3 } sx={ styles.stack }>
      { title && <Typography variant={ titleVariant }>{ title }</Typography> }
      <TextField
        fullWidth
        label="Email"
        { ...formik.getFieldProps('email') }
        error={ formik.touched.email && !!formik.errors.email }
        helperText={ (formik.touched.email && formik.errors.email) ?? ' ' }
      />
      <TextField
        fullWidth
        label="Senha"
        type={ showPassword ? 'text' : 'password' }
        { ...formik.getFieldProps('password') }
        error={ formik.touched.password && !!formik.errors.password }
        helperText={ (formik.touched.password && formik.errors.password) ?? ' ' }
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setShowPassword(v => !v)}>
              { showPassword ? <Visibility /> : <VisibilityOff /> }
            </IconButton>
          )
        }}
      />
      <Stack { ...stack.flex.row('flex-end', 'center') } sx={{ width: '100%' }}>
        <Button
          disabled={ btnDisabled }
          onClick={ formik.submitForm }
        >
          Login
        </Button>
      </Stack>
    </Stack>
  )
}

export default LoginForm