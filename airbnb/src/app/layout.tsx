// Core
import { Nunito } from 'next/font/google';
import Head from 'next/head';
// Styles
import './globals.css'
// Components
import { Navbar, RegisterModal } from '@/components';
import ToasterProvider from '@/providers/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
