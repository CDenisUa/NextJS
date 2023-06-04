// Core
import { Nunito } from 'next/font/google';
// Styles
import './globals.css'
// Components
import { Navbar, Modal } from '@/components';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Modal 
          actionLabel='Submit'
          onSubmit={() => {}}
          onClose={() => {}}
          isOpen 
        /> */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
