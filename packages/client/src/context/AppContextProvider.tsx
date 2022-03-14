import React, {createContext, useContext, useState} from "react"
import Tenant from "@ca/common/domain/tenant/Tenant"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import Category from "@ca/common/domain/category/Category"
import Product from "@ca/common/domain/product/Product"
import CartItem from "@ca/common/domain/cart/CartItem"
import {Decimal} from "decimal.js"

interface IAppContext {
  tenant: Tenant | null
  setTenant: (tenant: Tenant | null) => void
  categories: Category[] | null
  setCategories: (categories: Category[]) => void
  categoriesWithProduct: CategoryWithProductDto[]
  setCategoriesWithProduct: (categories: CategoryWithProductDto[]) => void
  cart: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  getTotal: () => number
  getTotalItems: () => number
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC = (props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [categories, setCategories] = useState<Category[] | null>(null)
  const [categoriesWithProduct, setCategoriesWithProduct] = useState<CategoryWithProductDto[]>([])
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity: number) => {
    setCart([...cart, {product, quantity}])
  }

  const getTotal = () => {
    return cart.reduce((prev, current) => {
      const prevNumber = new Decimal(prev)
      const currentNumber = new Decimal(current.product.price)
      return currentNumber.mul(current.quantity).plus(prevNumber).toNumber()
    }, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((prev, current) => prev + current.quantity, 0)
  }

  return (
    <AppContext.Provider
      value={{
        tenant,
        setTenant,
        categories,
        setCategories,
        categoriesWithProduct,
        setCategoriesWithProduct,
        cart,
        addToCart,
        getTotal,
        getTotalItems
      }}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
