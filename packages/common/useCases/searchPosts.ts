import {Post} from "../domain";
import {LocalStorageService, NotificationService, PostStorageService} from "./ports";
import {useLocalStorageService, useNotificationService, usePostStorageService} from "../services";

interface Dependencies {
    postStorage: PostStorageService
    localStorage: LocalStorageService
    notification: NotificationService
}

export const useSearchPosts = () => {
    const postStorage: PostStorageService = usePostStorageService()
    const localStorage: LocalStorageService = useLocalStorageService()
    const notification: NotificationService = useNotificationService()

    return {
        searchPosts: (keywords: string) => searchPosts(keywords, {postStorage, localStorage, notification})
    }
}

const searchPosts = async (keywords: string, dependencies: Dependencies): Promise<void> => {
    const {postStorage, localStorage, notification} = dependencies
    try {
        const rawPostsData: any = await postStorage.getPostsByAddressKeywords(keywords)
        const posts: Array<Post> = postStorage.postsMapper(rawPostsData)
        localStorage.updatePosts(posts)
    } catch (e) {
        notification.errorNotify(e)
    }
}
