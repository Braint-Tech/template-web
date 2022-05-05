import { FC, ReactNode } from 'react'
import { Box, SxProps } from '@mui/material'
import { modalBaseStyle } from './Base.styles'

type props = {
  sx?: SxProps,
  children?: ReactNode
}

const ModalBase: FC<props> = ({ children, sx = {} }) => {
  return (
    <Box sx={{ ...modalBaseStyle, ...sx } as any }>
      { children }
    </Box>
  )
}

export default ModalBase