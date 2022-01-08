import {HomeLocalStorageService} from "../useCases/ports";
import {Home} from "../domain";
import {useHomeContext} from "@ca/client/src/store/HomeContext";

export const useHomeLocalStorageService = (): HomeLocalStorageService => {
    return useHomeContext()
}
