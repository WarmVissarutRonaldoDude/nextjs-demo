import type { ReactElement, ReactNode } from 'react'
import type { NextPage, } from 'next'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}