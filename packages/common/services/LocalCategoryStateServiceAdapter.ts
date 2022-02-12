import {LocalCategoryStateService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalCategoryStateService = (): LocalCategoryStateService => {
  return useAppContext()
}
