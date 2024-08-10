// Core
import {FC} from 'react';
// Images
import {ArrowUpDown} from "lucide-react";
// Utils
import {cn} from "@/lib/utils";
// Components
import {SortPopupPropTypes} from "@/components/shared/sort-popup/SortPopup.types";

export const SortPopup: FC<SortPopupPropTypes> = (props) => {
    const {className} = props;
    return (
        <div
            className={cn(
                'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
                className
            )}
        >
            <ArrowUpDown/>
            <b>Sort:</b>
            <b className='text-primary'>Popular</b>
        </div>
    );
}