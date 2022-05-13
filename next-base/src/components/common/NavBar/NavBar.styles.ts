import { withTheme } from 'theme'
import { sx } from 'utils/mui'

const container = withTheme((theme) => ({
  width: '100%',
  minHeight: '60px',
  boxShadow: '0px 3px 9px rgba(0, 0, 0, .1)',
  paddingX: theme.spacing(2)
}))

const mobileMenuContainer = withTheme((theme) => ({
  ...sx.flex.col('center', 'flex-start'),
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  background: 'white',
  zIndex: 99,
  padding: theme.spacing(2),
}))

const NavBarStyles = {
  container,
  mobileMenuContainer
}

export default NavBarStyles