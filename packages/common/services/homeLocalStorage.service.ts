import {IHomeLocalStorageService} from "../useCases/adapters";
import {Home} from "../domain";

export class HomeLocalStorageService implements IHomeLocalStorageService {
    updateHomes(newHomes: Array<Home>) {
        console.log("local update: ", newHomes)
    }
}
