import {Home} from "../domain";

export interface StorageService {
    createHome(newHome: Home): Promise<void>
}

export interface NotificationService {
    successNotify(message: string): void

    failNotify(message: string): void

    errorNotify(error: any): void
}

export interface HomeStorageService {
    getHomesByAddressKeywords(keywords: string): Promise<any>

    homesMapper(rawHomesData: any): Array<Home>
}

export interface LocalStorageService {
    updateHomes(homes: Array<Home>): void
}
