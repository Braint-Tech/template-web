import { Typography } from '@mui/material'
import { SignUpForm } from 'components/auth'
import { Page } from 'components/common'
import type { NextPage } from 'next'
import Link from 'next/link'

const SignUp: NextPage = () => {
  return (
    <Page title='SignUp'>
      <SignUpForm onSignUp={values => console.log({ values })} />
      <Typography>
        {'Já possuo uma conta, '}
        <Link href="/auth/login">
          <a>quero fazer login</a>
        </Link>
      </Typography>
    </Page>
  )
}

export default SignUp