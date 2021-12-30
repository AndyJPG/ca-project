import {CommentID, UserEmail, UserName} from "./shared-kernal";

export interface User {
    userName: UserName
    email: UserEmail
    comments: Array<CommentID>
}
