import {LocalProductSearchService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalProductSearchService = (): LocalProductSearchService => {
  return useAppContext()
}
