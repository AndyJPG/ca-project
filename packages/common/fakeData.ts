import {Home} from "./domain";

export const homes: Array<Home> = []

export const fakeGetHomesApi = (): Promise<Array<Home>> => {
    return new Promise<Array<Home>>(resolve => resolve(homes))
}

export const fakeCreateHomeApi = (address: string, review: string): Promise<void> => {
    const id: string = "h-" + homes.length.toString()
    const newHome: Home = {
        id,
        address,
        review
    }
    homes.push(newHome)
    return new Promise(resolve => resolve())
}
