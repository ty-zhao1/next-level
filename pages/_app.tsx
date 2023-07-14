import '../app/globals.css' // adjust the path to where your globals.css file is located

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp