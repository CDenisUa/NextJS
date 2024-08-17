// Core
import { FC } from 'react';
// Types
import {FiltersPropTypes} from "@/components/shared/filters/Filters.types";
// Components
import {
    FilterCheckbox,
    Title
} from "@/components/shared";
import {Input, RangeSlider} from "@/components/ui";

export const Filters: FC<FiltersPropTypes> = ({className}) => {
    return (
        <div className={className}>
            <Title
                text='Filters'
                size='sm'
                className='mb-5 font-bold'
            />

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Collect' value='1'/>
                <FilterCheckbox text='New' value='2' />
            </div>

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p>Price:</p>
                <div className="flex items-center gap-3 mb-5">
                    <Input
                        type='number'
                        placeholder="0"
                        min={0}
                        max={200}
                        defaultValue={0}
                    />
                    <Input
                        type='number'
                        placeholder="30000"
                        min={100}
                        max={200}
                        value={200}
                    />
                    <span>$</span>
                </div>
                <RangeSlider min={0} max={200} step={1} value={[0,200]} />
            </div>
        </div>
    );
}