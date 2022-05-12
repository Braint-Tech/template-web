import { Yup } from 'config'

const login = Yup.object().shape({
  email: Yup.string().required().email().min(3),
  password: Yup.string().required().min(6).max(255),
})

const signUp = Yup.object().shape({
  email: Yup.string().required().email().min(3),
  password: Yup
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
  confirmPassword: Yup
    .string()
    .required()
    .oneOf([ Yup.ref('password') ], 'As senhas não conferem'),
})

const recoverPassword = Yup.object().shape({
  email: Yup.string().required().email().min(3),
})

const Schemas = {
  login,
  signUp,
  recoverPassword,
}

export default Schemas