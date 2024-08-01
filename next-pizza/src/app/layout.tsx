// Core
import type {Metadata, NextPage} from "next";
import {PropsWithChildren} from 'react';
import {Nunito} from "next/font/google";
// Styles
import "./globals.css";

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Pizza store | Main",
    description: "Store implemented by Next JS",
};

const RootLayout: NextPage<PropsWithChildren> = ({children}) =>
    <html lang="en">
        <body className={nunito.className}>
            <main className='min-h-screen'>
             {children}
            </main>
        </body>
    </html>

export default RootLayout;