'use client';
// Core
import { FC, useCallback, useEffect, useState } from 'react';
// Types
import { ModalPropTypes } from './Modal.types';
// Images
import { IoMdClose } from 'react-icons/io';
// Components
import { Button } from '@/components';

const Modal: FC<ModalPropTypes> = (props) => {
    const { 
        title,
        isOpen,
        body,
        footer,
        actionLabel,
        disabled,
        secondaryActionLabel,
        onClose,
        onSubmit,
        secondaryAction
    } = props;

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const handleClose = useCallback(() => {
        if(!disabled) {
            setIsShowModal(false);
            setTimeout(() => {
                onClose();
            }, 300)
        }
    },[disabled, onClose]);

    const handleSubmit = useCallback(() =>{
        if( !disabled) {
            onSubmit()
        }
    } , [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if(secondaryAction && !disabled) {
            secondaryAction()
        }
    } ,[secondaryAction, disabled]);

    useEffect(() => {
        setIsShowModal(isOpen);
    }, [isOpen])

    if( !isOpen) {
        return null;
    }

    return (
        <>
            <div
                className='
                    flex
                    items-center
                    justify-center
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none 
                    bg-neutral-800/70
                '
            >
                <div
                    className='
                        relative
                        w-full
                        md:w-4/6
                        lg:w-3/6
                        xl:w-2/5
                        my-6
                        mx-auto
                        h-full
                        lg:h-auto
                        md:h-auto
                    '
                >
                    <div
                        className={`
                            translate
                            duration-300
                            h-full
                            ${isShowModal ? 'translate-y-0' : 'translate-y-full'}
                            ${isShowModal ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <div
                            className='
                                translate
                                h-full
                                lg:h-auto
                                md:h-auto
                                border-0
                                rounded-lg
                                shadow-lg
                                relative
                                flex
                                flex-col
                                w-full
                                bg-white
                                outline-none
                                focus:outline-none
                            '
                        >
                            <header
                                className='
                                    flex
                                    items-center
                                    justify-center
                                    p-6
                                    rounded-t
                                    relative
                                    border-b-[1px]
                                '
                            >
                                <button
                                    onClick={handleClose}
                                    className='
                                        p-1
                                        border-0
                                        hover:opacity-70
                                        transition
                                        absolute
                                        left-9
                                    '
                                >
                                    <IoMdClose  size={18}/>
                                </button>
                                <p className='
                                        text-lg font-semibold
                                    '
                                    >
                                        {title}
                                    </p>
                            </header>
                            <main
                                className='
                                    relative
                                    p-6
                                    flex-auto
                                '
                            >
                                {body}
                            </main>
                            <footer className='
                                flex
                                flex-col
                                gap-2
                                p-6
                            '>
                                <div
                                    className='
                                        flex
                                        flex-row
                                        items-center
                                        gap-4
                                        w-full
                                    '
                                >
                                    {
                                        secondaryAction && secondaryActionLabel && 
                                            <Button 
                                                onClick={handleSecondaryAction}
                                                disabled={disabled}
                                                label={secondaryActionLabel}
                                            />
                                    }
                                    <Button 
                                        onClick={handleSubmit}
                                        disabled={disabled}
                                        label={actionLabel}
                                    />
                                </div>
                                {footer}
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;