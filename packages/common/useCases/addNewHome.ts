import {Home} from "../domain";
import {IHomeLocalStorageService, IHomeRepositoryService, INotificationService} from "./adapters";

interface Dependencies {
    homeRepository: IHomeRepositoryService
    homeStorage: IHomeLocalStorageService
    notification: INotificationService
}

export async function addNewHome(address: string, review: string, dependencies: Dependencies) {
    const {homeRepository, homeStorage, notification} = dependencies
    try {
        await homeRepository.createHome(address, review)
        const newHomes: Array<Home> = await homeRepository.getAllHomes()
        homeStorage.updateHomes(newHomes)
        notification.successNotify("Home create successful!")
    } catch (e) {
        notification.failNotify("Home creation failed!")
    }
}
