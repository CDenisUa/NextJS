// Types
import {ReactNode} from "react";

export interface FilterCheckboxPropTypes {
    text: string
    value: string
    endAdornment?: ReactNode
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
}