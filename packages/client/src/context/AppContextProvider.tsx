import React, {createContext, useContext, useState} from "react"
import Tenant from "@ca/common/domain/tenant/Tenant"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import Category from "@ca/common/domain/category/Category"

interface IAppContext {
  tenant: Tenant | null
  setTenant: (tenant: Tenant | null) => void
  categories: Category[] | null
  setCategories: (categories: Category[]) => void
  categoriesWithProduct: CategoryWithProductDto[]
  setCategoriesWithProduct: (categories: CategoryWithProductDto[]) => void
  searchResult: CategoryWithProductDto[]
  setSearchResult: (categories: CategoryWithProductDto[]) => void
  searchMode: boolean
  setSearchMode: (noResult: boolean) => void
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC = (props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [categories, setCategories] = useState<Category[] | null>(null)
  const [categoriesWithProduct, setCategoriesWithProduct] = useState<CategoryWithProductDto[]>([])
  const [searchResult, setSearchResult] = useState<CategoryWithProductDto[]>([])
  const [searchMode, setSearchMode] = useState(false)

  return (
    <AppContext.Provider
      value={{
        tenant,
        setTenant,
        categories,
        setCategories,
        categoriesWithProduct,
        setCategoriesWithProduct,
        searchResult,
        setSearchResult,
        searchMode,
        setSearchMode
      }}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
