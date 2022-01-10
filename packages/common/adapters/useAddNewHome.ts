import {addNewHome} from "../useCases/addNewHome"
import {IHomeLocalStorageService, IHomeRepositoryService, INotificationService} from "../useCases/adapters"
import {HomeRepositoryService, HomeLocalStorageService, NotificationService} from "../services"

export function useAddNewHome() {
    const homeRepository: IHomeRepositoryService = new HomeRepositoryService()
    const homeStorage: IHomeLocalStorageService = new HomeLocalStorageService()
    const notification: INotificationService = new NotificationService()

    return {
        addNewHome: (address: string, review: string) => addNewHome(address, review, {
            homeRepository, homeStorage, notification
        })
    }
}
