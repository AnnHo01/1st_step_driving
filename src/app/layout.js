import '../scss/App.scss'
import '../scss/custom.bootstrap.scss'
import { Inter } from 'next/font/google'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '1st Step Driving School',
  description: '1st Step Driving School offers comprehensive and affordable driving lessons with experienced instructors. Learn to drive safely and confidently with us. Book your lesson today.',
  authors: [{name: 'Ann Ho', url: 'https://www.linkedin.com/in/ann-ho-1304/'}],
  keywords: ['driving', 'driving school', 'winnipeg driving', 'winnipeg school'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Playfair%20Display:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
