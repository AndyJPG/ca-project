import {UniqueID, UserEmail, UserName} from "./shared-kernal";
import {Comment} from "./comment";

export interface User {
    id: UniqueID
    userName: UserName
    email: UserEmail
    comments: Array<UniqueID>
}

export const addNewCommentToUser = (user: User, comment: Comment): User => {
    return {...user, comments: [...user.comments, comment.id]}
}
