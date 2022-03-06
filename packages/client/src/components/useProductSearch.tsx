import {useEffect, useState} from "react"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {Subject} from "rxjs"

export interface ProductSearchProps {
  searchResult: CategoryWithProductDto[] | null
}

export const productSearch$ = new Subject<ProductSearchProps>()

export const useProductSearch = () => {
  const [searchResult, setSearchResult] = useState<CategoryWithProductDto[] | null>(null)

  useEffect(() => {
    productSearch$.subscribe({
      next: value => {
        setSearchResult(value.searchResult)
      }
    })
  }, [])

  return {searchResult}
}
