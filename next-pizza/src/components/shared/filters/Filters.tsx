// Core
import { FC } from 'react';
// Types
import {FiltersPropTypes} from "@/components/shared/filters/Filters.types";
// Components
import {
    FilterCheckbox,
    Title
} from "@/components/shared";

export const Filters: FC<FiltersPropTypes> = ({className}) => {
    return (
        <div className={className}>
            <Title
                text='Filters'
                size='sm'
                className='mb-5 font-bold'
            />

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Collect con' value='1'/>
                <FilterCheckbox text='New' value='2' />
            </div>
        </div>
    );
}