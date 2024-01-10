'use client';
// Core
import { FC } from 'react';
// Types
import { ContainerPropTypes } from './Container.types';

const Container: FC<ContainerPropTypes> = ({ children }) => 
    <div
        className="
            max-w-[2520px] 
            mx-auto 
            xl:px-20 
            md:px-10 
            sm:px-2 
            px-4  
        "
    >
        {children}
    </div>;

export default Container;