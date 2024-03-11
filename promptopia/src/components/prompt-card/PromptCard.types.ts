// Core
import {Dispatch, SetStateAction} from "react";

export interface PromptCardPropTypes {
    post: IPost,
    handleTagClick: Dispatch<SetStateAction<string>>,
    handleEdit?: () => void,
    handleDelete?: () => void,

}
