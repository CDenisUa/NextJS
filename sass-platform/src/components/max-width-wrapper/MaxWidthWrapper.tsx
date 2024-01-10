// Core
import { FC } from 'react';
// Types
import { IMaxWidthPropTypes } from './MaxWidthWrapper.types';
// Utils
import { cn } from '@/lib/utils';

const MaxWidthWrapper: FC<IMaxWidthPropTypes> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
