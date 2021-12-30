import {CommentContent, DateISOString, UniqueID} from "./shared-kernal";
import {User} from "./user";

export interface Comment {
    id: UniqueID
    author: User
    createdDate: DateISOString
    content: CommentContent
}
