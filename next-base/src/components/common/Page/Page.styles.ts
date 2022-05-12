import { withTheme } from 'theme'
import { AlignItems, JustifyContent } from 'types'
import { sx } from 'utils/mui'

const getContainerSx = (
  h: AlignItems = 'center',
  v: JustifyContent = 'flex-start',
  minHeight: 'device-height' | number = 'device-height',
  maxWidth: number = 1200
) => withTheme(() => ({
  ...sx.flex.col(h, v),
  width: '100%',
  minHeight: minHeight === 'device-height' ?  '100vh' : `${minHeight}px`,
  maxWidth: `${maxWidth}px !important`,
}))

const PageStyles = {
  getContainerSx,
}

export default PageStyles