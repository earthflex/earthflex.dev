import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{backgroundImage: `url("/bg-min.jpg")` }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
