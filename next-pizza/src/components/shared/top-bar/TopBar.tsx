// Core
import { FC } from 'react';
// Types
import {TopBarPropTypes} from "@/components/shared/top-bar/TopBar.types";
// Utils
import {cn} from "@/lib/utils";
// Components
import {Categories, Container, SortPopup} from "@/components/shared";

export const TopBar: FC<TopBarPropTypes> = ({className}) => {
    return (
        <div className={cn(
            'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
            className
        )}>
            <Container className={'flex items-center justify-between'}>
                <Categories/>
                <SortPopup/>
            </Container>
        </div>
    );
}