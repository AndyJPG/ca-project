import {LocalCartService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalCartService = (): LocalCartService => {
  return useAppContext()
}
