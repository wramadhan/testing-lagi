import GA from '@/components/GA/GA'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  let measurementId: string = String(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
  )
  return (
    <>
      <GA measurementId={measurementId} />
      <Component {...pageProps} />
    </>
  )
}
