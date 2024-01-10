// Types
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form/dist/types";

export interface BodyContentPropTypes {
    isLoading?: boolean;
    register:  UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}