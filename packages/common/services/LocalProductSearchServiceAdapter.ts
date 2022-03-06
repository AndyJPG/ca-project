import {LocalProductSearchService} from "../useCases/ServicesAdapter.interfaces"
import {useProductSearch} from "@ca/client/src/components/useProductSearch"
import {useRxjsContext} from "@ca/client/src/context/RxjsContextProvider"

export const useLocalProductSearchService = (): LocalProductSearchService => {
  return {
    searchResult: useProductSearch().searchResult,
    setSearchResult: useRxjsContext().productSearch
  }
}
