import {CartStorageService, OrdersStorageService} from "../useCases/ports";
import {useAppContext} from "@ca/client/src/context/AppContextProvider";

export function useOrdersStorage(): OrdersStorageService {
    return useAppContext()
}

export function useCartStorage(): CartStorageService {
    return useAppContext()
}
