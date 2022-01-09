import {HomeLocalStorageService} from "../useCases";
import {useHomeContext} from "@ca/client/src/store/HomeContext";

export const useHomeLocalStorageService = (): HomeLocalStorageService => {
    return useHomeContext()
}
