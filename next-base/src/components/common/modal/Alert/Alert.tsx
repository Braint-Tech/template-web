import ModalBase from '../Base'
import { stack } from 'utils/mui'
import { SxProps } from '@mui/system'
import { FC, useCallback, useMemo } from 'react'
import { Button, Stack, Typography } from '@mui/material'

type props = {
  sx?: SxProps,
  onOk?: () => void,
  onClose?: () => void,
  title: string | string[],
  text?: string | string[],
  closeOnConfirm?: boolean,
  confirmButtonText?: string,
}

const Alert: FC<props> = ({ 
  sx,
  text,
  onOk,
  title,
  onClose,
  closeOnConfirm = true,
  confirmButtonText = 'Ok',
}) => {

  const titles: string[] = useMemo(
    () => typeof title === 'string' ? [ title ] : title,
    [ title ]
  )
  const texts: string[] = useMemo(
    () => text
      ? typeof text === 'string'
        ? [ text ]
        : text
      : [],
    [ text ]
  )

  const onOkHandler = useCallback(() => {
    onOk && onOk()
    closeOnConfirm && onClose && onClose()
  }, [ onOk, onClose, closeOnConfirm ])

  return (
    <ModalBase sx={ sx }>
      {
        titles.map(
          (_title, index) => (
            <Typography
              variant="h2"
              key={`alert_title_${index}`}
              sx={{ width: '100%' }}
            >
              { _title }
            </Typography>
          )
        )
      }
      {
        texts.map(
          (_text, index) => (
            <Typography
              variant="body1"
              key={`alert_title_${index}`}
              sx={{ width: '100%' }}
            >
              { _text }
            </Typography>
          )
        )
      }
      <Stack { ...stack.flex.col('flex-end', 'center') } sx={{ width: '100%' }}>
        <Button onClick={ onOkHandler }>{ confirmButtonText }</Button>
      </Stack>
    </ModalBase>
  )
}

export default Alert