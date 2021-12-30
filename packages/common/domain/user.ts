import {CommentID, UserEmail, UserId, UserName} from "./shared-kernal";

export interface User {
    id: UserId
    userName: UserName
    email: UserEmail
    comments: Array<CommentID>
}
