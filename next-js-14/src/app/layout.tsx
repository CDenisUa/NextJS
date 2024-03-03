// Core
import {NextPage} from "next";
import { Inter } from 'next/font/google'
// Styles
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

const RootLayout: NextPage<OnlyChildrenType> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;