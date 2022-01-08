import {Home} from "../domain";
import {LocalStorageService, NotificationService, HomeStorageService} from "./ports";
import {
    useHomeStorageService,
    useLocalStorageService,
    useNotificationService
} from "../services";

interface Dependencies {
    postStorage: HomeStorageService
    localStorage: LocalStorageService
    notification: NotificationService
}

export const useSearchHomes = () => {
    const postStorage: HomeStorageService = useHomeStorageService()
    const localStorage: LocalStorageService = useLocalStorageService()
    const notification: NotificationService = useNotificationService()

    return {
        searchPosts: (keywords: string) => searchHomes(keywords, {postStorage, localStorage, notification})
    }
}

const searchHomes = async (keywords: string, dependencies: Dependencies): Promise<void> => {
    const {postStorage, localStorage, notification} = dependencies
    try {
        const rawPostsData: any = await postStorage.getHomesByAddressKeywords(keywords)
        const posts: Array<Home> = postStorage.homesMapper(rawPostsData)
        localStorage.updateHomes(posts)
    } catch (e) {
        notification.errorNotify(e)
    }
}
