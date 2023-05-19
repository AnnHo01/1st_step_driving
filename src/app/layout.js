import '../scss/App.scss'
import '../scss/custom.bootstrap.scss'
import Script from 'next/script'
import { Roboto, Playfair_Display } from 'next/font/google'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const playFair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: '1st Step Driving School',
  description: '1st Step Driving School offers comprehensive and affordable driving lessons with 30 years experienced instructors. Learn to drive safely and confidently with us. Book your lesson today online or call (204) 291 - 8704.',
  authors: [{name: 'Ann Ho', url: 'https://www.linkedin.com/in/ann-ho-1304/'}],
  keywords: ['driving', 'driving school', 'winnipeg driving', 'winnipeg school', 'winnipeg driving school', 'first time driver', 'driving school in Winnipeg', '1st step driving school', 'bobby\'s driving school'],
  openGraph: {
    title: '1st Step Driving School',
    description: '1st Step Driving School offers comprehensive and affordable driving lessons with 30 years experienced instructors. Learn to drive safely and confidently with us. Book your lesson today online or call (204) 291 - 8704.',
    url: 'https://1ststepdrivingschool.com/',
    siteName: '1st Step Driving School',
    images: [
      {
        url: 'https://1ststepdrivingschool.com/_ipx/w_2048,q_75/%2Fgal-2.jpg?url=%2Fgal-2.jpg&w=2048&q=75',
        width: 800,
        height: 600,
        alt: '1st Step Driving School Training Car',
      }
    ],
    type: 'website',
    authors: ['Ann Ho']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11180674865" strategy="beforeInteractive"></Script>
        <Script id="google-ads-tag" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11180674865');`,
        }} />
      </head>
      <body className={`${roboto.variable} ${playFair.variable}`}>{children}</body>
    </html>
  )
}
