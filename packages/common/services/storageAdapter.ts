import {CartStorageService, OrdersStorageService, UserStorageService} from "../useCases/ports";
import {useAppContext} from "@ca/client/src/context/AppContextProvider";

export function useOrdersStorage(): OrdersStorageService {
    return useAppContext()
}

export function useCartStorage(): CartStorageService {
    return useAppContext()
}

export function useUserStorage(): UserStorageService {
    return useAppContext()
}
