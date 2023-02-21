import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/main.css'
import '../styles/responsive.css'
import localFont from '@next/font/local'

const clashdisplay = localFont({
  src: [
    {
      path: '../styles/fonts/clashdisplay/fonts/ClashDisplay-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className={clashdisplay.className} >
      <Component {...pageProps} />
    </div>
  )
}
