import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { stack } from 'utils/mui'
import styles from './SignUpForm.styles'
import { useFormik, FormikConfig } from 'formik'
import { objectSome } from 'object-fn-ts/lib'
import isEmpty from 'is-empty'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Schemas from '../schemas'

type State = {
  email: string,
  password: string,
  confirmPassword: string
}

type props = {
  title?: string,
  titleVariant?: 'h1' | 'h2' | 'h3',
  onSignUp: FormikConfig<State>["onSubmit"]
}

const SignupForm: FC<props> = ({
  title,
  titleVariant = 'h2',
  onSignUp
}) => {

  const [ showPassword, setShowPassword ] = useState<[ boolean, boolean ]>([ false, false ])
  const [ btnDisabled, setBtnDisabled ] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Schemas.signUp,
    onSubmit: onSignUp,
    validateOnChange: true,
    validateOnBlur: true,
  })

  useEffect(() => {
    setBtnDisabled(
      !formik.isValid
      || objectSome(formik.touched, (_, val) => !val)
      || isEmpty(formik.touched)
    )
  }, [ formik ])

  return (
    <Stack { ...stack.flex.col('center', 'flex-start') } spacing={ 2 } sx={ styles.stack }>
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
        type={ showPassword[ 0 ] ? 'text' : 'password' }
        { ...formik.getFieldProps('password') }
        error={ formik.touched.password && !!formik.errors.password }
        helperText={ (formik.touched.password && formik.errors.password) ?? ' ' }
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setShowPassword(v => [ !v[0], v[1] ])}>
              { showPassword[ 0 ] ? <Visibility /> : <VisibilityOff /> }
            </IconButton>
          )
        }}
      />
      <TextField
        fullWidth
        label="Confirmar senha"
        type={ showPassword[ 1 ] ? 'text' : 'password' }
        { ...formik.getFieldProps('confirmPassword') }
        error={ formik.touched.confirmPassword && !!formik.errors.confirmPassword }
        helperText={ (formik.touched.confirmPassword && formik.errors.confirmPassword) ?? ' ' }
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setShowPassword(v => [ v[0], !v[1] ])}>
              { showPassword[ 1 ] ? <Visibility /> : <VisibilityOff /> }
            </IconButton>
          )
        }}
      />
      <Stack { ...stack.flex.row('flex-end', 'center') } sx={{ width: '100%' }}>
        <Button
          disabled={ btnDisabled }
          onClick={ formik.submitForm }
        >
          Signup
        </Button>
      </Stack>
    </Stack>
  )
}

export default SignupForm