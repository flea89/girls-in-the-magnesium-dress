import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thegirlsinthemagnesiumdress.com" />
        <meta property="og:site_name" content="The girls in the magnesium dress" />
        <link
            href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
