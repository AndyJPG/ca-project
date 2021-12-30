import {UniqueID, UserEmail, UserName} from "./shared-kernal";
import {Comment} from "./comment";
import {generateUniqueIdPlaceholder} from "../libs/helpers";

export interface User {
    id: UniqueID
    userName: UserName
    email: UserEmail
    comments: Array<UniqueID>
}

export const createUser = (name: UserName, email: UserEmail): User => {
    return {
        id: generateUniqueIdPlaceholder(),
        userName: name,
        email: email,
        comments: []
    }
}

export const addNewCommentToUser = (user: User, comment: Comment): User => {
    return {...user, comments: [...user.comments, comment.id]}
}
