import { FC } from 'react'
import { useEffect, useState } from 'react'
import { Page } from 'components/common'
import styles from './ConfirmEmailWithToken.styles'
import { CircularProgress, Stack, Typography } from '@mui/material'
import { stack } from 'utils/mui'
import { isNullable } from 'utils'

type props = {
  token: string | undefined,
  validateFunction: () => Promise<boolean>
}

const ConfirmEmailWithToken: FC<props> = ({ token, validateFunction }) => {

  const [ valid , setValid ] = useState<boolean | null>(null)

  useEffect(() => {
    validateFunction()
    .then(res => {
      setValid(res)
    })
  }, [])

  return (
    <Page title='Confirmar email' verticalAlignment='center'>
      {
        isNullable(token) && !isNullable(valid)
          ? <Typography variant='h2'> Token inválido </Typography>
          : (
            <Stack { ...stack.flex.col('center', 'flex-start') } sx={ styles.getMainStackSx(isNullable(valid)) }>
              {
                isNullable(valid)
                  ? <CircularProgress size={ 54 } sx={ styles.spinner } />
                  : valid
                    ? <Typography variant='h2'> Email validado com sucesso </Typography>
                    : <Typography variant='h2'> Token inválido </Typography>
              }
            </Stack>
          )
      }
    </Page>
  )
}

export default ConfirmEmailWithToken