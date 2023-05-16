import '../scss/App.scss'
import '../scss/custom.bootstrap.scss'
import { Inter } from 'next/font/google'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

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
        {/* <link href="https://fonts.googleapis.com/css?family=Playfair%20Display:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"></link> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
