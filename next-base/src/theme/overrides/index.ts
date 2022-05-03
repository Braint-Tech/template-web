import { Theme, ThemeOptions } from "@mui/material"
import { getButtonOverride } from "./button"

export const getOverrides = (theme: Theme): ThemeOptions["components"] => ({
  ...getButtonOverride(theme)
})