import {LocalCategoryStateService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/Context"

export const useLocalCategoryStateService = (): LocalCategoryStateService => {
  return useAppContext()
}
