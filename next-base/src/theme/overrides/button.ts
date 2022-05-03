import { Theme, ThemeOptions } from "@mui/material"

export const getButtonOverride = (theme: Theme): ThemeOptions["components"] => {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained'
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
}