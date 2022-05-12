import { Typography } from '@mui/material'
import { LoginForm } from 'components/auth'
import { Page } from 'components/common'
import type { NextPage } from 'next'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <Page title='Login'>
      <LoginForm onLogin={(values) => console.log({ values })} />
      <Link href="/auth/signup">
        <a>Quero me cadastrar</a>
      </Link>
    </Page>
  )
}

export default Login