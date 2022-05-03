import { createTheme, Theme } from "@mui/material"
import { SxProps } from '@mui/system'
import { getOverrides } from "./overrides"
import { palette } from "./palette"

const theme = createTheme({
  palette: palette,
  shape: {
    borderRadius: 8
  }
})

theme.components = {
  ...getOverrides(theme),
}

export const withTheme = (fn: (theme: Theme) => SxProps) => fn(theme)

export const updateThemeComponents = (t: Theme) => t.components = {
  ...getOverrides(t),
}

export default theme