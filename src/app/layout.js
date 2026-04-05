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
  title: '1st Step Driving School Winnipeg | MPI Road Test Prep | 30+ Yrs Exp',
  description: "Master driving with Winnipeg's trusted 1st Step Driving School. 30+ years experience. Lessons in English, Punjabi & Hindi. Affordable MPI road test prep & parallel parking. Book your lesson online or call (204) 291-8704!",
  authors: [{name: 'Ann Ho', url: 'https://annsdigital.com/'}],
  keywords: [
    '1st step driving school', 
    'Winnipeg driving school', 
    'Punjabi driving instructor Winnipeg', 
    'Hindi driving lessons', 
    'MPI road test preparation Winnipeg', 
    'Class 5 driving lessons Winnipeg', 
    'affordable driving school Winnipeg',
    'parallel parking lessons Winnipeg'
  ],
  openGraph: {
    title: '1st Step Driving School Winnipeg | Punjabi & Hindi Speaking Instructor',
    description: 'Affordable, professional driving lessons in Winnipeg with 30+ years of experience. Specializing in MPI road test success. Lessons available in English, Punjabi, and Hindi.',
    url: 'https://1ststepdrivingschool.com/',
    siteName: '1st Step Driving School',
    images: [
      {
        url: 'https://1ststepdrivingschool.com/_ipx/w_2048,q_75/%2Fgal-2.jpg?url=%2Fgal-2.jpg&w=2048&q=75',
        width: 1200,
        height: 630,
        alt: '1st Step Driving School Winnipeg Training Car',
      }
    ],
    type: 'website',
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T41SDEZ70R" strategy="beforeInteractive"></Script>
        <Script id="google-ads-tag" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T41SDEZ70R');`,
        }} />
      </head>
      <body className={`${roboto.variable} ${playFair.variable}`}>{children}</body>
    </html>
  )
}
