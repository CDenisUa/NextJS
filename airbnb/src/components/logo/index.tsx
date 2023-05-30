'use client';
// Core
import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo: FC = () => {
    const router = useRouter();
    return (
        <Image 
            width="100"
            height="100"
            src="/images/logo.png"
            alt='Logo'
            className="
                hidden 
                md:block 
                cursor-pointer
            "
        />
    );
};

export default Logo;