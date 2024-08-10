// Core
import { FC } from 'react';
// Styles
import styles from './styles.module.css';
// Types
import {CategoriesPropTypes} from "@/components/shared/categories/Categories.types";
// Utils
import {cn} from "@/lib/utils";

export const Categories: FC<CategoriesPropTypes> = (props) => {
    const {
        className
    } = props;
    return (
        <div
            className={cn('', className)}
        >
            Categories
        </div>
    );
}