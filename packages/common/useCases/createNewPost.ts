import {Address, createPost, Post, User} from "../domain";
import {NotificationService, StorageService} from "./ports";

interface Dependencies {
    storage: StorageService
    notifier: NotificationService
}

export const useCreateNewPost = () => {
    
}

const createNewPost = async (user: User, address: Address, dependencies: Dependencies): Promise<void> => {
    const {storage, notifier} = dependencies
    const newPost: Post = createPost(user, address)
    try {
        storage.createPost(newPost)
        notifier.successNotify("Post created")
    } catch (e) {
        notifier.failNotify("Fail creating post")
        throw e
    }
}
