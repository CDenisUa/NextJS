'use client';
// Core
import { FC } from 'react';
import Image from 'next/image';

const Avatar: FC = () => {
    return (
        <Image 
            src="/images/placeholder.jpg"
            className='rounded-full'
            width="30"
            height="30"
            alt="Avatar"
        />
    );
};

export default Avatar;