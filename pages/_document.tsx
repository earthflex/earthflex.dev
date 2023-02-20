import { Html, Head, Main, NextScript } from 'next/document'
import { Provider } from 'react-wrap-balancer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Provider>
        <body style={{ backgroundImage: `url("/bg-min.jpg")` }}>
          <Main />
          <NextScript />
        </body>
      </Provider>
    </Html>
  )
}
