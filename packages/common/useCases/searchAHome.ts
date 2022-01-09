import {Home} from "../domain";
import {HomeStorageService, NotificationService} from "./ports";
import {useHomeStorageService, useNotificationService} from "../services";

interface Dependencies {
    homeStorage: HomeStorageService
    notification: NotificationService
}

export const useSearchAHome = () => {
    const homeStorage: HomeStorageService = useHomeStorageService()
    const notification: NotificationService = useNotificationService()

    return {
        searchAHome: (homeId: string) => searchAHome(homeId, {homeStorage, notification})
    }
}

const searchAHome = async (homeId: string, dependencies: Dependencies): Promise<Home> => {
    const {homeStorage, notification} = dependencies
    try {
        const rawHomeData: any = await homeStorage.getHomeById(homeId)
        return homeStorage.homeMapper(rawHomeData)
    } catch (e) {
        notification.errorNotify(e)
        throw e
    }
}
