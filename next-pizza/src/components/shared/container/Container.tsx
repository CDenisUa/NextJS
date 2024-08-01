// Core
import {FC, PropsWithChildren} from "react";
// Types
import {ContainerPropTypes} from "@/components/shared/container/Container.types";
// Utils
import {cn} from '@/lib/utils';

export const Container: FC<PropsWithChildren<ContainerPropTypes>> = (props) => {
    const {className, children} = props;
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)}>
            {children}
        </div>
    )
};
