import { LoginForm } from 'components/auth'
import { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <div>
      <LoginForm title='Login' />
    </div>
  )
}

export default Login