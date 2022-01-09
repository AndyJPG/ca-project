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
    getHomeById(homeId: string): Promise<any>

    getHomesByAddressKeywords(keywords: string): Promise<any>

    homeMapper(rawHomeData: any): Home

    homesMapper(rawHomesData: any): Array<Home>
}

export interface HomeLocalStorageService {
    updateHomes(homes: Array<Home>): void
}
