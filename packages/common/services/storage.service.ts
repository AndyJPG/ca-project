import {StorageService} from "../useCases/ports";
import {Post} from "../domain";

export const useStorageService = (): StorageService => {
    return {
        async createPost(newPost: Post) {
            return new Promise((res) => setTimeout(() => res(), 2000))
        }
    }
}
