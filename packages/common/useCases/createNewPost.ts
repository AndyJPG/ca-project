import {Address, createPost, Post, User} from "../domain";
import {NotificationService, StorageService} from "./ports";
import {useStorageService} from "../services/storage.service";
import {useNotificationService} from "../services/notification.service";

interface Dependencies {
    storage: StorageService
    notifier: NotificationService
}

export const useCreateNewPost = () => {
    const storage: StorageService = useStorageService()
    const notifier: NotificationService = useNotificationService()

    return {
        createNewPost: (user: User, address: Address) => createNewPost(user, address, {storage, notifier})
    }
}

const createNewPost = async (user: User, address: Address, dependencies: Dependencies): Promise<void> => {
    const {storage, notifier} = dependencies
    const newPost: Post = createPost(user, address)
    try {
        await storage.createPost(newPost)
        notifier.successNotify("Post created")
    } catch (e) {
        notifier.failNotify("Fail creating post")
        throw e
    }
}
