import {DateISOString, Postcode, State, StreetAddress, Suburb, UniqueID} from "./shared-kernal";

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

