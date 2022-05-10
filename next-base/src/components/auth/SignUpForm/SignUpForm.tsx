import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { stack } from 'utils/mui'
import styles from './SignUpForm.styles'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { objectSome } from 'object-fn-ts/lib'
import isEmpty from 'is-empty'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type props = {
  title?: string,
  titleVariant?: 'h1' | 'h2' | 'h3',
}

yup.setLocale({
  string: {
    email: 'Email inválido',
    min: 'Mínimo de ${min} caracteres',
    max: 'Mínimo de ${max} caracteres',
  },
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
  }
})

const schema = yup.object().shape({
  email: yup.string().required().email().min(3),
  password: yup
    .string()
    .required()
    .min(6)
    .max(255)    
    .test(
      'use-numbers',
      'Utilize ao menos um número',
      value => /\d/g.test(value ?? '')
    )
    .test(
      'use-capital-letters',
      'Utilize ao menos uma letra maiúscula',
      value => /[A-Z]/g.test(value ?? '')
    )
    .test(
      'use-small-letters',
      'Utilize ao menos uma letra minúscula',
      value => /[a-z]/g.test(value ?? '')
    )
    .test(
      'use-symbol',
      'Utilize ao menos um símbolo',
      value => /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g.test(value ?? '')
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([ yup.ref('password') ], 'As senhas não conferem'),
})

const SignupForm: FC<props> = ({
  title,
  titleVariant = 'h2',
}) => {

  const [ showPassword, setShowPassword ] = useState<[ boolean, boolean ]>([ false, false ])
  const [ btnDisabled, setBtnDisabled ] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      // ...handle submition here
    },
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