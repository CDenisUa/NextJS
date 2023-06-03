'use client';

// Core
import { FC, useCallback, useEffect, useState } from 'react';
// Types
import { ModalPropTypes } from './Modal.types';

const Modal: FC<ModalPropTypes> = (props) => {
    const { 
        title,
        isOpen,
        body,
        footer,
        actionLabel,
        disabled,
        secondaryLabel,
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

    const handleSubmit = useCallback(() => {

    }, [])

    useEffect(() => {
        setIsShowModal(isOpen);
    }, [isOpen])

    return <div>Modal</div>;
};

export default Modal;