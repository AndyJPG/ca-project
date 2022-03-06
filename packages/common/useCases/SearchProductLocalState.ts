import {LocalCategoryService, LocalProductSearchService} from "./ServicesAdapter.interfaces"
import {useLocalCategoryService} from "../services/LocalCategoryServiceAdapter"
import {useLocalProductSearchService} from "../services/LocalProductSearchServiceAdapter"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"

interface Dependencies {
  localCategoryState: LocalCategoryService
  localProductSearch: LocalProductSearchService
}

export const searchProductLocalState = (dependencies: Dependencies) => {
  const localCategoryState: LocalCategoryService = dependencies.localCategoryState
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
  const localCategoryState = useLocalCategoryService()
  const localProductSearch = useLocalProductSearchService()

  return searchProductLocalState({localCategoryState, localProductSearch})
}
