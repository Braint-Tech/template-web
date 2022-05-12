import { ConfirmEmailWithToken } from 'components/auth'
import { Page } from 'components/common'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { RouteNormalizer } from 'utils'

const ConfirmEmail: NextPage = () => {
  
  const router = useRouter()  
  const { token } = router.query

  const validateToken: () => Promise<boolean> = useCallback(
    () => new Promise((res, rej) => {
      setTimeout(() => res(true), 1500)
    }),
    []
  )

  return (
    <Page title='Confirmar email' verticalAlignment='center'>
      <ConfirmEmailWithToken
        token={ RouteNormalizer.query.possibleManyToSingle(token) }
        validateFunction={ validateToken }
      />
    </Page>
  )
}

export default ConfirmEmail