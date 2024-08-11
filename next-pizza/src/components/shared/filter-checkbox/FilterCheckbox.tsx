// Core
import { FC } from 'react';
// Types
import {FilterCheckboxPropTypes} from "@/components/shared/filter-checkbox/FilterCheckbox.types";
// Components
import {Checkbox} from "@/components/ui";

export const FilterCheckbox: FC<FilterCheckboxPropTypes> = (props) => {
    const {
        text,
        value,
        endAdornment,
        onCheckedChange,
        checked
    } = props;

    return (
        <div className='flex items-center space-x-2'>
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className='rounded-[8px] w-6 h-6'
                id={`checkbox-${String(value)}`}
            />
            <label
                htmlFor={`checkbox-${String(value)}`}
                className='leading-none cursor-pointer flex-1'
            >
                {text}
            </label>
            {endAdornment}
        </div>
    );
}