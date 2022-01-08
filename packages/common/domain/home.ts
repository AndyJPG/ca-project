import {Address, DateISOString, UniqueID} from "./shared-kernal";
import {Comment} from "./comment";
import {User} from "./user";
import {generateUniqueIdPlaceholder, getCurrentDateInISOString} from "../libs/helpers";

export interface Home {
    id: UniqueID
    author: User
    createdDate: DateISOString
    comments: Array<UniqueID>
    address: Address
}

export const createHome = (user: User, address: Address): Home => {
    return {
        id: generateUniqueIdPlaceholder(),
        author: user,
        createdDate: getCurrentDateInISOString(),
        comments: [],
        address: address
    }
}

export const addCommentToAHome = (home: Home, comment: Comment): Home => {
    return {...home, comments: [...home.comments, comment.id]}
}
