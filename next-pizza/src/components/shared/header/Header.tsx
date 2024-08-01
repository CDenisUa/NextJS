// Core
import { FC } from 'react';
import Image from 'next/image';
// Utils
import {cn} from "@/lib/utils";
// Components
import { Container } from '@/components/shared/container/Container';

const Header: FC = () => {
    return (
        <header className={cn('border border-b')}>
            <Container className='flex items-center justify-between py-8'>
                <div>
                    <Image
                        src='/logo.webp'
                        width={35}
                        height={35}
                        alt='logo'
                    />
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Pizza Bliss</h1>
                        <p className='text-sm text-gray-400 leading-3'>Simply Delicious Pizza</p>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;