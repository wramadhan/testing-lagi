import GA from '@/components/GA/GA'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GA measurementId='G-X8LQ9WW8ZK' />
      <Component {...pageProps} />
    </>
  )
}
