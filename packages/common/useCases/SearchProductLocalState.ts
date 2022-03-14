import {LocalCategoryService, LocalProductSearchService} from "./ServicesAdapter.interfaces"
import {useLocalCategoryService} from "../services/LocalCategoryService"
import {useLocalProductSearchService} from "../services/LocalProductSearchService"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"

interface Dependencies {
  localCategoryState: LocalCategoryService
  localProductSearch: LocalProductSearchService
}

const searchProductLocalState = (dependencies: Dependencies) => {
  const localCategoryState: LocalCategoryService = dependencies.localCategoryState
  const localProductSearch: LocalProductSearchService = dependencies.localProductSearch

  return {
    searchProductLocalState(keyword: string) {
      const filterKeyword = keyword.toLowerCase()
      const categoriesWithProduct: CategoryWithProductDto[] = JSON.parse(JSON.stringify(localCategoryState.categoriesWithProduct))
      const {setSearchResult} = localProductSearch

      if (keyword === "") {
        setSearchResult(null)
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
      }
    }
  }
}

export const useSearchProductLocalState = () => {
  const localCategoryState = useLocalCategoryService()
  const localProductSearch = useLocalProductSearchService()

  return searchProductLocalState({localCategoryState, localProductSearch})
}
