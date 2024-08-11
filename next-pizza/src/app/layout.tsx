// Core
import type {Metadata, NextPage} from "next";
import {PropsWithChildren} from 'react';
import {Roboto} from "next/font/google";
// Styles
import "./globals.css";
// Components
import { Header } from "@/components/shared";

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: [ "100", "300","400","500","700","900"],
});

export const metadata: Metadata = {
    title: "Pizza Bliss | Main",
    description: "Store implemented by Next JS",
};

const RootLayout: NextPage<PropsWithChildren> = ({children}) =>
    <html lang="en">
        <body className={roboto.className}>
            <Header />
            <main className='min-h-screen'>
             {children}
            </main>
        </body>
    </html>

export default RootLayout;