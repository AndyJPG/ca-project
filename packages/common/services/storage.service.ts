import {StorageService} from "../useCases/ports";
import {Home} from "../domain";

export const useStorageService = (): StorageService => {
    return {
        async createPost(newPost: Home) {
            return new Promise((res) => setTimeout(() => res(), 2000))
        }
    }
}
