// Core
import {FC} from 'react';
import Image from 'next/image';
// Images
import {
    ShoppingCart,
    User,
    ArrowRight
} from "lucide-react";
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
                    <Button
                        variant='outline'
                        className='flex items-center gap-1'
                    >
                        <User size={16}/>
                        Log In
                    </Button>

                    <div>
                        <Button className='group relative'>
                            <b>10$</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3' />
                            <div
                                className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'
                            >
                                <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
                                <b>3</b>
                            </div>
                            <ArrowRight size={16} className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}