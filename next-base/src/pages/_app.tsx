import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { HelmetProvider } from 'react-helmet-async'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default MyApp
