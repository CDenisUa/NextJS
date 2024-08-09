// Core
import {FC} from 'react';
import Image from 'next/image';
// Images
import {User} from "lucide-react";
// Utils
import {cn} from "@/lib/utils";
// Components
import {Container} from '@/components/shared';
import {Button} from "@/components/ui";

export const Header: FC = () => {
    return (
        <header className={cn('border border-b')}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flext items-center gap-4'>
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

                <div className='flex items-center gap-3'>
                    <Button variant='outline'>
                        <User size={16} />
                        Log In
                    </Button>
                </div>
            </Container>
        </header>
    );
}