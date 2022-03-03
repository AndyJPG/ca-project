import {LocalCategoryStateService, LocalProductSearchResultService} from "./ServicesAdapter.interfaces"
import {useLocalCategoryStateService} from "../services/LocalCategoryStateServiceAdapter"
import {useLocalProductSearchResultServiceAdapter} from "../services/LocalProductSearchResultServiceAdapter"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"

interface Dependencies {
  localCategoryState: LocalCategoryStateService
  localProductSearchResult: LocalProductSearchResultService
}

export const searchProductLocalState = (dependencies: Dependencies) => {
  const localCategoryState: LocalCategoryStateService = dependencies.localCategoryState
  const localProductSearchResult: LocalProductSearchResultService = dependencies.localProductSearchResult

  return {
    searchProductLocalState(keyword: string) {
      const filterKeyword = keyword.toLowerCase()
      const categoriesWithProduct: CategoryWithProductDto[] = JSON.parse(JSON.stringify(localCategoryState.categoriesWithProduct))
      const {updateCategoriesWithProductSearchResult} = localProductSearchResult

      if (keyword === "") {
        updateCategoriesWithProductSearchResult([])
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
        updateCategoriesWithProductSearchResult(filteredCategories)
      }
    }
  }
}

export const useSearchProductLocalState = () => {
  const localCategoryState = useLocalCategoryStateService()
  const localProductSearchResult = useLocalProductSearchResultServiceAdapter()

  return searchProductLocalState({localCategoryState, localProductSearchResult})
}
