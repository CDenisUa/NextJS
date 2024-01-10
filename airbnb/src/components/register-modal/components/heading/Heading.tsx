// Core
import { FC } from 'react';
// Types
import { HeadingPropTypes } from './Heading.types';

const Heading: FC<HeadingPropTypes> = (props) => {
    const { title, subtitle, center } = props;
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <p className='text-2xl font-bold'>
                {title}
            </p>
            <div className='font-light text-neutral-500 mt-2'>
                {subtitle}
            </div>
        </div>
        );
};

export default Heading;