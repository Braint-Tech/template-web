import { Menu } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import { useSafeWindow } from 'hooks'
import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'
import { stack } from 'utils/mui'
import styles from './NavBar.styles'

type props = {
  logo?: ReactNode,
  // children?: ReactNode,
  mobileThreshold: number,
  setItems?: (setMobileMenuOpen: Dispatch<SetStateAction<boolean>>) => ReactNode[]
}

const NavBar: FC<props> = ({
  logo,
  setItems,
  mobileThreshold
}) => {

  const safeWindow = useSafeWindow()
  const [ mobileOpen, setMobileOpen ] = useState(false)

  return (
    <Stack
      { ...stack.flex.row(logo ? 'space-between' : 'flex-end', 'center') }
      sx={ styles.container }
    >
      {
        mobileOpen
        && (
          <Box
            sx={ styles.mobileMenuContainer }
          >
            <Stack
              { ...stack.flex.col('center', 'flex-start') }
              sx={{ width: '100%' }}
            >
              <Stack { ...stack.flex.row('flex-end', 'center') } sx={{ width: '100%' }}>
                <IconButton onClick={() => setMobileOpen(false)}>
                  <Menu />
                </IconButton>
              </Stack>
              <Stack
                { ...stack.flex.col('center', 'flex-start') }
                spacing={ 3 }
                sx={{ width: '90%', maxWidth: '450px'}}
              >
                { setItems && setItems(setMobileOpen) }
              </Stack>
            </Stack>
          </Box>
        )
      }
      { logo }
      {        
        safeWindow && safeWindow.innerWidth > mobileThreshold
          ? (
            <Stack { ...stack.flex.row('center', 'center') } spacing={ 2 }>
              { setItems && setItems(setMobileOpen) }
            </Stack>
          )
          : (
            <IconButton onClick={() => setMobileOpen(true)}>
              <Menu />
            </IconButton>
          )
      }
    </Stack>
  )
}

export default NavBar