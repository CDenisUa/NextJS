'use client';
// Core
import { FC } from 'react';
// Components
import Heading from '../heading/Heading';
import { Input } from '@/components';

const BodyContent: FC = () => (
    <div className='flex flex-col gap-4'>
        <Heading 
            title='Welcome to Airbnb'
            subtitle='Create an account!'
        />
        {/* <Input /> */}
    </div>
);

export default BodyContent;