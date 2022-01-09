import {Home} from "../domain";
import {HomeLocalStorageService, NotificationService, HomeStorageService} from "./ports";
import {
    useHomeStorageService,
    useHomeLocalStorageService,
    useNotificationService
} from "../services";

interface Dependencies {
    homeStorage: HomeStorageService
    localStorage: HomeLocalStorageService
    notification: NotificationService
}

export const useSearchHomes = () => {
    const homeStorage: HomeStorageService = useHomeStorageService()
    const localStorage: HomeLocalStorageService = useHomeLocalStorageService()
    const notification: NotificationService = useNotificationService()

    return {
        searchHomes: (keywords: string) => searchHomes(keywords, {homeStorage, localStorage, notification})
    }
}

const searchHomes = async (keywords: string, dependencies: Dependencies): Promise<void> => {
    const {homeStorage, localStorage, notification} = dependencies
    try {
        const rawHomesData: any = await homeStorage.getHomesByAddressKeywords(keywords)
        const homes: Array<Home> = homeStorage.homesMapper(rawHomesData)
        localStorage.updateHomes(homes)
    } catch (e) {
        notification.errorNotify(e)
    }
}
