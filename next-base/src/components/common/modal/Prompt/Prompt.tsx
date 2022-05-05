import { Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import { stack } from 'utils/mui'
import ModalBase from '../Base'

type props = {
  title: string | string[],
  text?: string | string[],
  onCancel?: () => void,
  onConfirm?: (value: string) => void,
  onChange?: (value: string, setValue: Dispatch<SetStateAction<string>>) => void,  
  onClose?: () => void,
  closeOnCancel?: boolean
  closeOnConfirm?: boolean,
  cancelButtonText?: string,
  confirmButtonText?: string,
  InputProps?: {
    palceholder?: string,
    defaultValue?: string
  },
  sx?: SxProps,
}

const Prompt: FC<props> = ({
  sx,
  text,
  title,
  onClose,
  onCancel,
  onChange,
  onConfirm,
  InputProps,
  closeOnCancel = true,
  closeOnConfirm = true,
  cancelButtonText = 'Cancelar',
  confirmButtonText = 'Confirmar',
}) => {

  const [ inputValue, setInputValue ] = useState<string>(InputProps?.defaultValue ?? '')
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
    onConfirm && onConfirm(inputValue)
    closeOnConfirm && onClose && onClose()
  }, [ onConfirm, onClose, closeOnConfirm, inputValue ])

  const onCancelHandler = useCallback(() => {
    onCancel && onCancel()
    closeOnCancel && onClose && onClose()
  }, [ onCancel, onClose, closeOnCancel ])

  useEffect(() => {
    if(onChange){
      onChange(inputValue, setInputValue)
    }
  }, [ onChange, inputValue ])

  return (
    <ModalBase>
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
      <TextField
        fullWidth
        value={ inputValue }
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Stack { ...stack.flex.row('flex-end', 'center') } sx={{ width: '100%' }} spacing={ 2 }>
        <Button onClick={ onCancelHandler } color='secondary'>{ cancelButtonText }</Button>
        <Button onClick={ onConfirmHandler }>{ confirmButtonText }</Button>
      </Stack>
    </ModalBase>
  )
}

export default Prompt