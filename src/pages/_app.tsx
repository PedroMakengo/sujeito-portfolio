import type { AppProps } from 'next/app'

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

import '../styles/global.scss'
import { Header } from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
