import { RecoverPasswordForm } from 'components/auth'
import { Page } from 'components/common'
import type { NextPage } from 'next'

const RecoverPassword: NextPage = () => {
  return (
    <Page title='Recuperar senha'>
      <RecoverPasswordForm onRequestEmail={(values) => console.log({ values })} />
    </Page>
  )
}

export default RecoverPassword