'use client'
// Core
import {FC, useState} from 'react';
// Types
import {CheckboxFiltersGroupPropTypes} from "@/components/shared/checkbox-filters-group/CheckboxFiltersGroup.types";
// Components
import {Input} from "@/components/ui";
import {FilterCheckbox} from "@/components/shared";

const CheckboxFiltersGroup: FC<CheckboxFiltersGroupPropTypes> = (props) => {
    const {
        title,
        items,
        defaultValue,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Search...',
        className,
        onChange,
    } = props;

    const [ showAll, setShowAll] = useState(false);

    const list = showAll ? items : defaultItems?.slice(0, limit);
    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            {
                showAll &&
                <div className='mb-5'>
                    <Input
                        placeholder={searchInputPlaceholder}
                        className='bg-gray-50 border-none'
                    />
                </div>
            }

            <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                {
                    list.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={false}
                            onCheckedChange={(ids) => console.log(ids)}
                        />
                    ))
                }
            </div>
            {
                items.length > limit && (
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button
                            className='text-primary mt-3'
                            onClick={() => setShowAll(prev => !prev)}
                        >
                            {showAll ? 'Hide' : '+ Show All'}
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default CheckboxFiltersGroup;