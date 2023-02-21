import { Html, Head, Main, NextScript } from 'next/document'
import { Provider } from 'react-wrap-balancer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Provider>
        <body>
          <div className="grain-animation"></div>
          <Main />
          <NextScript />
        </body>
      </Provider>
    </Html>
  )
}
