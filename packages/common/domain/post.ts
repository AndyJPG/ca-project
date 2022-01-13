import {DateISOString, Postcode, State, StreetAddress, Suburb, UniqueID} from "./shared-kernal";
import {Comment} from "./comment";
import {User} from "./user";
import {generateUniqueIdPlaceholder, getCurrentDateInISOString} from "../libs/helpers";

export interface Post {
    id: UniqueID
    author: User
    createdDate: DateISOString
    comments: Array<UniqueID>
    address: Address
}

export interface Address {
    streetAddress: StreetAddress
    suburb: Suburb
    state: State
    postcode: Postcode
}

export const createPost = (user: User, address: Address): Post => {
    return {
        id: generateUniqueIdPlaceholder(),
        author: user,
        createdDate: getCurrentDateInISOString(),
        comments: [],
        address: address
    }
}

export const addCommentToPost = (post: Post, comment: Comment): Post => {
    return {...post, comments: [...post.comments, comment.id]}
}