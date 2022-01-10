import {Home} from "../domain";

export interface IHomeRepositoryService {
    createHome(address: string, review: string): Promise<void>
    getAllHomes(): Promise<Array<Home>>
}

export interface IHomeLocalStorageService {
    updateHomes(newHomes: Array<Home>): void
}

export interface INotificationService {
    successNotify(message: string): void
    failNotify(message: string): void
}
