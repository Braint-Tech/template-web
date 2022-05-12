import { Button, Stack, TextField, Typography } from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { stack } from 'utils/mui'
import styles from './RecoverPassword.styles'
import { useFormik, FormikConfig } from 'formik'
import Schemas from '../schemas'
import { objectSome } from 'object-fn-ts/lib'
import isEmpty from 'is-empty'

type State = {
  email: string
}

type props = {
  title?: string,
  titleVariant?: 'h1' | 'h2' | 'h3',
  onRequestEmail: FormikConfig<State>["onSubmit"]
}

const RecoverPasswordForm: FC<props> = ({
  title,
  titleVariant = 'h2',
  onRequestEmail
}) => {
  
  const [ btnDisabled, setBtnDisabled ] = useState(false)

  const formik = useFormik<State>({
    initialValues: {
      email: '',
    },
    validationSchema: Schemas.recoverPassword,
    onSubmit: onRequestEmail,
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
      <Stack { ...stack.flex.row('flex-end', 'center') }>
        <Button
          disabled={ btnDisabled }
          onClick={ formik.submitForm }
        >
          Recuperar senha
        </Button>
      </Stack>
    </Stack>
  )
}

export default RecoverPasswordForm