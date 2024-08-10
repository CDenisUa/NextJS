// Mock
import {categoriesData} from "@/components/shared/categories/mocks";

export interface CategoriesPropTypes {
    className?: string
}

export type Category = typeof categoriesData[number];
