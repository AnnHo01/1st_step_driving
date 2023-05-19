// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Playfair%20Display:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
        </Head>
        <body>
          <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11180674865" strategy="afterInteractive"></Script>
          <Script id="google-ads-tag" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11180674865');`,
          }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument