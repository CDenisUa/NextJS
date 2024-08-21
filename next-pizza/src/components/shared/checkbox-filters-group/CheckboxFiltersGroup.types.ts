// Types
import {FilterCheckboxPropTypes} from '../filter-checkbox/FilterCheckbox.types'

export interface CheckboxFiltersGroupPropTypes {
    title: string
    items?: FilterCheckboxPropTypes[]
    defaultItems?: FilterCheckboxPropTypes[]
    limit?: number
    searchInputPlaceholder?: string
    className?: string
    onChange?: (value: any) => void
    defaultValue?: string[]
}