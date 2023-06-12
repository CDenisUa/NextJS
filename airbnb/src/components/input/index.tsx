'use client';
// Core
import { FC } from 'react';
// Types
import { InputPropTypes } from './Input.types';

const Input: FC<InputPropTypes> = (props) => {
    const {
        id,
        label,
        type = "text",
        disabled,
        formatPrice,
        required,
        register,
        errors,
    } = props;
    return <div>Input</div>;
};

export default Input;