import {LocalStorageService} from "../useCases/ports";
import {Post} from "../domain";

export const useLocalStorageService = (): LocalStorageService => {
    return {
        updatePosts(posts: Array<Post>) {
            console.log(posts)
        }
    }
}
