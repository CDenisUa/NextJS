'use client';
// Core
import { FC } from 'react';
// Types
import { MenuItemPropTypes } from './MenuItem.types';

const MenuItem: FC<MenuItemPropTypes> = ({ onClick, label }) => {
    return (
        <div
            onClick={onClick}
            className='
                px-4
                py-3
                hover-neutral-100
                transition
                font-semibold
            '
        >
            { label }
        </div>
    );
};

export default MenuItem;