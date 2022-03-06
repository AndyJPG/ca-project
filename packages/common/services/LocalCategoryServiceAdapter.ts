import {LocalCategoryService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalCategoryService = (): LocalCategoryService => {
  return useAppContext()
}
