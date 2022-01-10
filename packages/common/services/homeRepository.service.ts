import {IHomeRepositoryService} from "../useCases/adapters";
import {fakeCreateHomeApi, fakeGetHomesApi} from "../fakeData";
import {Home} from "../domain";

export class HomeRepositoryService implements IHomeRepositoryService {
    createHome(address: string, review: string): Promise<void> {
        return fakeCreateHomeApi(address, review)
    }
    getAllHomes(): Promise<Array<Home>> {
        return fakeGetHomesApi()
    }
}
