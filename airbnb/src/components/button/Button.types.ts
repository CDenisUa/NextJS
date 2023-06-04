// Types
import { MouseEvent } from 'react';
import { IconType } from 'react-icons';

export interface ButtonPropTypes {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}