import {CartStorageService, OrdersStorageService, UserStorageService} from "../useCases/ports";
import {useAppContext} from "@ca/client/src/context/AppContextProvider";

export function useOrdersStorageService(): OrdersStorageService {
    return useAppContext()
}

export function useCartStorageService(): CartStorageService {
    return useAppContext()
}

export function useUserStorageService(): UserStorageService {
    return useAppContext()
}
