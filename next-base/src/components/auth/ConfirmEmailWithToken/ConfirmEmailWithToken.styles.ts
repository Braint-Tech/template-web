import { withTheme } from 'theme'

const getMainStackSx = (loading: boolean) => withTheme(() => ({
  minHeight: loading ? 'auto' : '100vh',
}))

const spinner = withTheme((theme) => ({
  color: theme.palette.primary.main,
}))

const ConfirmEmailWithTokenStyles = {
  getMainStackSx,
  spinner,
}

export default ConfirmEmailWithTokenStyles