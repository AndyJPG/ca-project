import {StorageService} from "../useCases";
import {Home} from "../domain";

export const useStorageService = (): StorageService => {
    return {
        async createHome(newPost: Home) {
            return new Promise((res) => setTimeout(() => res(), 2000))
        }
    }
}
