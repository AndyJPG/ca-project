import {useEffect, useState} from "react"
import {Subject} from "rxjs"
import CategoryWithProducts from "@ca/common/domain/category/CategoryWithProducts"

export interface ProductSearchProps {
  searchResult: CategoryWithProducts[] | null
}

export const productSearch$ = new Subject<ProductSearchProps>()

export const useProductSearch = () => {
  const [searchResult, setSearchResult] = useState<CategoryWithProducts[] | null>(null)

  useEffect(() => {
    const productSearchSub = productSearch$.subscribe({
      next: value => {
        setSearchResult(value.searchResult)
      }
    })

    return () => {
      productSearchSub.unsubscribe()
    }
  }, [])

  return {searchResult}
}
