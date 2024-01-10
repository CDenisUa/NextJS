// Types
import { ReactElement } from "react";

export interface ModalPropTypes {
    title?: string;
    isOpen: boolean;
    body?: ReactElement;
    footer?: ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryActionLabel?: string;
    onClose: () => void;
    onSubmit: () => void;
    secondaryAction?: () => void;
}