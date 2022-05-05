import { withTheme } from 'theme'
import { sx } from 'utils/mui'

export const modalBaseStyle = withTheme(() => ({
  ...sx.flex.col('center', 'space-between'),
  width: '90%',
  maxWidth: '440px',
  background: '#fff',
  height: 'auto',
  minHeight: '20vh',
  padding: '16px',
  boxShadow: '0px 3px 9px rgba(0, 0, 0, .15)',
  borderRadius: '2px',
  position: 'relative'
}))