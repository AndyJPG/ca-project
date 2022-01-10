import {Address, Review, UniqueId} from "./shared-kernal";

export interface Home {
    id: UniqueId
    address: Address
    review: Review
}
