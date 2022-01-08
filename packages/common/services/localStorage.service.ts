import {LocalStorageService} from "../useCases/ports";
import {Home} from "../domain";

export const useLocalStorageService = (): LocalStorageService => {
    return {
        updateHomes(posts: Array<Home>) {
            console.log(posts)
        }
    }
}
