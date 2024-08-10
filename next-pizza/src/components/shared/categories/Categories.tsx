// Core
import { FC } from 'react';
// Types
import {CategoriesPropTypes} from "@/components/shared/categories/Categories.types";
// Mock
import { categoriesData } from './mocks';
// Utils
import {cn} from "@/lib/utils";

export const Categories: FC<CategoriesPropTypes> = (props) => {
    const {
        className
    } = props;

    const activeIndex = 0;

    return (
        <div
            className={cn(
                ' inline-flex gap-1 bg-gray-50 p-1 rounded-2xl',
                className
            )}
        >
            {
                categoriesData.map((cat, index) => (
                    <a
                        className={cn(
                            'flex items-center font-bold h11 rounded-2xl px-5',
                            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                        )}
                        key={index}
                    >
                        <button>
                            {cat}
                        </button>
                    </a>
                ))
            }
        </div>
    );
}