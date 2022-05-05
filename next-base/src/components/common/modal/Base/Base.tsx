import { Box, SxProps } from '@mui/material'
import { FC } from 'react'
import { sx } from 'utils/mui'

type props = {
  sx?: SxProps,
  children?: JSX.Element
}

const defaultSx: SxProps = {
  ...sx.flex.column('center', 'space-between'),
  width: '90%',
  maxWidth: '440px',
  background: '#fff',
  height: 'auto',
  minHeight: '20vh',
  padding: '16px',
  boxShadow: '0px 3px 9px rgba(0, 0, 0, .15)',
  borderRadius: '2px',
  position: 'relative'
}

const ModalBase: FC<props> = ({ children, sx = defaultSx }) => {
  return (
    <Box sx={ sx }>
      { children }
    </Box>
  )
}

export default ModalBase