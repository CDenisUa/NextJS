// Core
import {NextPage} from "next";
// Styles
import '@/styles/global.css';
// Components
import {
    Nav,
    Provider,
} from '@/components';

export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI Prompts"
}

const RootLayout: NextPage<OnlyChildren> = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className="gradient"/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
}

export default RootLayout;