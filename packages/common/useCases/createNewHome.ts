import {Address, createHome, Home, User} from "../domain";
import {NotificationService, StorageService} from "./ports";
import {useStorageService, useNotificationService} from "../services";

interface Dependencies {
    storage: StorageService
    notifier: NotificationService
}

export const useCreateNewHome = () => {
    const storage: StorageService = useStorageService()
    const notifier: NotificationService = useNotificationService()

    return {
        createNewHome: (user: User, address: Address) => createNewHome(user, address, {storage, notifier})
    }
}

const createNewHome = async (user: User, address: Address, dependencies: Dependencies): Promise<void> => {
    const {storage, notifier} = dependencies
    const newHome: Home = createHome(user, address)
    try {
        await storage.createHome(newHome)
        notifier.successNotify("PostPage created")
    } catch (e) {
        notifier.failNotify("Fail creating post")
        throw e
    }
}
