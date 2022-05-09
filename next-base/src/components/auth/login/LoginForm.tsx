import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FC, useEffect, useState } from 'react'
import { stack } from 'utils/mui'
import styles from './LoginForm.styles'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { objectSome } from 'object-fn-ts/lib'
import isEmpty from 'is-empty'

type props = {
  title?: string,
  titleVariant?: 'h1' | 'h2' | 'h3',
}

yup.setLocale({
  string: {
    email: 'Email inválido',
    min: 'Mínimo de ${min} caracteres',
  },
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
  }
})

const schema = yup.object().shape({
  email: yup.string().required().email().min(3),
  password: yup.string().required().min(6).max(255),
})

const LoginForm: FC<props> = ({
  title,
  titleVariant = 'h2',
}) => {

  const [ showPassword, setShowPassword ] = useState(false)
  const [ btnDisabled, setBtnDisabled ] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      // ...handle submition here
    },
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