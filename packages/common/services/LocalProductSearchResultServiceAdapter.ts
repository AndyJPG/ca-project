import {LocalProductSearchResultService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalProductSearchResultService = (): LocalProductSearchResultService => {
  return useAppContext()
}
