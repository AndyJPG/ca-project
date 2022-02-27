import React, {createContext, useContext, useState} from "react"
import Tenant from "@ca/common/domain/tenant/Tenant"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import Category from "@ca/common/domain/category/Category"

interface IAppContext {
  tenant: Tenant | null
  updateTenant: (tenant: Tenant | null) => void
  categories: Category[] | null
  updateCategories: (categories: Category[]) => void
  categoriesWithProduct: CategoryWithProductDto[]
  updateCategoriesWithProduct: (categories: CategoryWithProductDto[]) => void
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC = (props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [categories, seCategories] = useState<Category[] | null>(null)
  const [categoriesWithProduct, setCategoriesWithProduct] = useState<CategoryWithProductDto[]>([])

  return (
    <AppContext.Provider
      value={{
        tenant,
        updateTenant: setTenant,
        categories,
        updateCategories: seCategories,
        categoriesWithProduct,
        updateCategoriesWithProduct: setCategoriesWithProduct
      }}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
