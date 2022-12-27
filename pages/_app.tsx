import '../styles/globals.css'
import Head from 'next/head'
import { Cabin } from '@next/font/google'
import type { AppProps } from 'next/app'

const cabin  = Cabin({ subsets: [ 'latin'], weight: '400'})

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <main className={cabin.className}>
      <Head>
        <title> My Lonly URL</title>
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
