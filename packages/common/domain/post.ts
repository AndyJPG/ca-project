import {DateISOString, Postcode, State, StreetAddress, Suburb, UniqueID} from "./shared-kernal";
import {Comment} from "./comment";

export interface Post {
    id: UniqueID
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

export const addNewCommentToPost = (post: Post, comment: Comment): Post => {
    return {...post, comments: [...post.comments, comment.id]}
}
