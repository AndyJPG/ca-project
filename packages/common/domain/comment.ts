import {CommentContent, DateISOString, UniqueID} from "./shared-kernal";
import {User} from "./user";
import {generateUniqueIdPlaceholder, getCurrentDateInISOString} from "../libs/helpers";

export interface Comment {
    id: UniqueID
    author: User
    createdDate: DateISOString
    content: CommentContent
}

export const createComment = (user: User, content: CommentContent): Comment => {
    return {
        id: generateUniqueIdPlaceholder(),
        author: user,
        createdDate: getCurrentDateInISOString(),
        content: content
    }
}
