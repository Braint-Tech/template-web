import { withTheme } from 'theme'
import { AlignItems, JustifyContent } from 'types'
import { sx } from 'utils/mui'

const calcMinHeight = (baseValue: string, headerHeightPx?: number) =>
  !headerHeightPx
    ? baseValue
    : `calc(${baseValue} - ${headerHeightPx}px)`

const getContainerSx = (
  h: AlignItems = 'center',
  v: JustifyContent = 'flex-start',
  minHeight: 'device-height' | number = 'device-height',
  maxWidth: number = 1200,
  headerHeightPx?: number
) => withTheme(() => ({
  ...sx.flex.col(h, v),
  width: '100%',
  minHeight: calcMinHeight(minHeight === 'device-height' ? '100vh' : `${minHeight}px`, headerHeightPx),
  maxWidth: `${maxWidth}px !important`,
}))

const containerWrapper = withTheme(() => ({
  ...sx.flex.col('center', 'flex-start'),
  width: '100%',
}))

const fixedHeaderWrapper = withTheme(() => ({
  ...sx.flex.col('center', 'center'),
  width: '100%',
}))

const PageStyles = {
  getContainerSx,
  containerWrapper,
  fixedHeaderWrapper,
}

export default PageStyles