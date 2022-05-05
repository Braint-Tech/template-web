import ModalBase from '../Base'
import { stack } from 'utils/mui'
import { SxProps } from '@mui/system'
import { FC, useCallback, useMemo } from 'react'
import { Button, Stack, Typography } from '@mui/material'

type props = {
  sx?: SxProps,
  onClose?: () => void,
  onCancel?: () => void,
  onEither?: () => void,
  onConfirm?: () => void,
  closeOnCancel?: boolean,
  title: string | string[],
  text?: string | string[],
  closeOnConfirm?: boolean,
  cancelButtonText?: string,
  confirmButtonText?: string,
}

const Confirm: FC<props> = ({
  sx,
  text,
  title,
  onClose,
  onEither,
  onCancel,
  onConfirm,
  closeOnCancel = true,
  closeOnConfirm = true,
  confirmButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
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

  const onConfirmHandler = useCallback(() => {
    onConfirm && onConfirm() && onEither && onEither()
    closeOnConfirm && onClose && onClose()
  }, [ onConfirm, closeOnConfirm, onEither, onClose ])

  const onCancelHandler = useCallback(() => {
    onCancel && onCancel() && onEither && onEither()
    closeOnCancel && onClose && onClose()
  }, [ onCancel, closeOnCancel, onEither, onClose ])

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
      <Stack { ...stack.flex.row('flex-end', 'center') } sx={{ width: '100%' }} spacing={ 2 }>
        <Button onClick={ onCancelHandler } color='secondary'>{ cancelButtonText }</Button>
        <Button onClick={ onConfirmHandler }>{ confirmButtonText }</Button>
      </Stack>
    </ModalBase>
  )
}

export default Confirm