'use client';
// Core
import { FC } from 'react';
// Types
import { ButtonPropTypes } from './Button.types';

const Button: FC<ButtonPropTypes> = (props) => {
    const {
        label,
        disabled,
        outline,
        small,
        icon: Icon,
        onClick
    } = props;

    return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${outline ? 'bg-white' : 'bg-rose-500'}
            ${outline ? 'border-black' : 'border-rose-500'}
            ${outline ? 'text-black' : 'text-white'}
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-sm' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-2'}
        `}
    >
        { Icon && 
            <Icon 
                size={24}
                className='
                    absolute
                    left-4
                    top-3
                '
            />
        }
        { label }
    </button>
    );
};

export default Button;