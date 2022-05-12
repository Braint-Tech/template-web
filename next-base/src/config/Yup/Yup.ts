import * as yup from 'yup'

type Lang = 'pt-br' | 'en-us'

const init = (lang: Lang, instance: any) => {
  const dictionary: {[key in Lang]: () => void} = {
    'pt-br': () => {
      instance.setLocale({
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
    },
    'en-us': () => {
      instance.setLocale({
        string: {
          email: 'Invalid email',
          min: 'Minimum of ${min} characters',
          max: 'Maximum of ${max} characters',
          url: 'Invalid URL',
          trim: 'Spaces are not allowed',
          lowercase: 'Only lowercase letters',
          uppercase: 'Only uppercase letters',
          uuid: 'Invalid id',
        },
        mixed: {
          default: 'Invalid field',
          required: 'Required field',
        },
        date: {
          max: 'Date is greater than the limit',
          min: 'Date is less than the limit',
        },
        number: {
          max: 'Number is greater than the limit',
          min: 'Number is less than the limit',
          negative: 'Number must be negative',
          positive: 'Number must be positive',
        }
      })
    }
  }
  return dictionary[lang]()
}

init('pt-br', yup)

export default yup