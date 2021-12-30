import {UniqueID, UserEmail, UserName} from "./shared-kernal";

export interface User {
    id: UniqueID
    userName: UserName
    email: UserEmail
    comments: Array<UniqueID>
}
