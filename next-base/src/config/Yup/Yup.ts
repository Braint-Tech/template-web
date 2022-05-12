import * as yup from 'yup'

yup.setLocale({
  string: {
    email: 'Email inválido',
    min: 'Mínimo de ${min} caracteres',
    max: 'Máximo de ${max} caracteres',
    url: 'URL inválida',
    trim: 'Espaços em branco não são permitidos',
    lowercase: 'Somente letras minúsculas',
    uppercase: 'Somente letras maiúsculas',
    uuid: 'Id inválido',
  },
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
  },
  date: {
    max: 'Data maior que o limite',
    min: 'Data menor que o limite',
  },
  number: {
    max: 'Número maior que o limite',
    min: 'Número menor que o limite',
    negative: 'Número deve ser negativo',
    positive: 'Número deve ser positivo',
  }
})

export default yup