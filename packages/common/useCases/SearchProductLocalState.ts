import {LocalCategoryStateService, LocalProductSearchService} from "./ServicesAdapter.interfaces"
import {useLocalCategoryStateService} from "../services/LocalCategoryStateServiceAdapter"
import {useLocalProductSearchService} from "../services/LocalProductSearchResultServiceAdapter"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"

interface Dependencies {
  localCategoryState: LocalCategoryStateService
  localProductSearch: LocalProductSearchService
}

export const searchProductLocalState = (dependencies: Dependencies) => {
  const localCategoryState: LocalCategoryStateService = dependencies.localCategoryState
  const localProductSearch: LocalProductSearchService = dependencies.localProductSearch

  return {
    searchProductLocalState(keyword: string) {
      const filterKeyword = keyword.toLowerCase()
      const categoriesWithProduct: CategoryWithProductDto[] = JSON.parse(JSON.stringify(localCategoryState.categoriesWithProduct))
      const {setSearchResult, setSearchMode} = localProductSearch

      if (keyword === "") {
        setSearchMode(false)
      } else {
        const filteredCategories = categoriesWithProduct.filter(category => {
          const filteredProducts = category.products.filter(product => {
            return product.name.toLowerCase().includes(filterKeyword) || product.description.toLowerCase().includes(filterKeyword) || product.ingredients.join(" ").toLowerCase().includes(filterKeyword)
          })
          if (filteredProducts.length === 0) {
            return false
          } else {
            category.products = filteredProducts
            return true
          }
        })
        setSearchResult(filteredCategories)
        setSearchMode(true)
      }
    }
  }
}

export const useSearchProductLocalState = () => {
  const localCategoryState = useLocalCategoryStateService()
  const localProductSearch = useLocalProductSearchService()

  return searchProductLocalState({localCategoryState, localProductSearch})
}
