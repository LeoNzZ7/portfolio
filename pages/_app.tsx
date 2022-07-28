import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from "../contexts/theme.context"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
