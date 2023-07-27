// Types
import { FieldErrors,  FieldValues, UseFormRegister } from "react-hook-form";

export interface InputPropTypes {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register:  UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}