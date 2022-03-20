import React, {createContext, useContext, useState} from "react"
import Tenant from "@ca/common/domain/tenant/Tenant"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import Category from "@ca/common/domain/category/Category"
import Product from "@ca/common/domain/product/Product"
import CartItem from "@ca/common/domain/cart/CartItem"
import {Decimal} from "decimal.js"
import shortid from "shortid"
import {ProductOptions} from "@ca/common/domain/product/ProductOption"

interface IAppContext {
  tenant: Tenant | null
  setTenant: (tenant: Tenant | null) => void
  categories: Category[] | null
  setCategories: (categories: Category[]) => void
  categoriesWithProduct: CategoryWithProductDto[]
  setCategoriesWithProduct: (categories: CategoryWithProductDto[]) => void
  cart: CartItem[]
  setCart: (cart: CartItem[]) => void
  getLocalStorageCart: (companyDomain: string) => CartItem[] | null
  setLocalStorageCart: (companyDomain: string, cart: CartItem[]) => void
  addToCart: (product: Product, quantity: number, productOptions: ProductOptions[]) => void
  getSubTotal: () => number
  getTotal: () => number
  getTotalItems: () => number
  changeCartItemQuantity: (id: string, quantity: number) => void
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC = (props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [categories, setCategories] = useState<Category[] | null>(null)
  const [categoriesWithProduct, setCategoriesWithProduct] = useState<CategoryWithProductDto[]>([])
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity: number, productOptions: ProductOptions[]) => {
    const newCart = [...cart, {id: shortid.generate(), product, quantity, productOptions}]
    setCart(newCart)
    if (tenant) {
      setLocalStorageCart(tenant.companyDomain, newCart)
    }
  }

  const getSubTotal = () => {
    return cart.reduce((prev, current) => {
      const prevNumber = new Decimal(prev)
      const currentNumber = new Decimal(current.product.price)
      return currentNumber.mul(current.quantity).plus(prevNumber).toNumber()
    }, 0)
  }

  const getTotal = () => {
    const surcharge = new Decimal(0.00)
    return (new Decimal(getSubTotal()).plus(surcharge)).toNumber()
  }

  const getTotalItems = () => {
    return cart.reduce((prev, current) => prev + current.quantity, 0)
  }

  const changeCartItemQuantity = (id: string, quantity: number) => {
    const newCart: CartItem[] = JSON.parse(JSON.stringify(cart))
    const itemIndex = newCart.findIndex(cart => cart.id === id)

    if ((newCart[itemIndex].quantity + quantity) < 1) {
      removeCartItem(id)
      return
    }

    newCart[itemIndex].quantity += quantity
    setCart(newCart)
    if (tenant) {
      setLocalStorageCart(tenant.companyDomain, newCart)
    }
  }

  const removeCartItem = (id: string) => {
    const newCart = cart.filter(cart => cart.id !== id)
    setCart(newCart)
  }

  const getLocalStorageCart = (companyDomain: string) => {
    const localCart = localStorage.getItem(`${companyDomain}-cart`)
    if (localCart) {
      return JSON.parse(localCart)
    }
    return null
  }

  const setLocalStorageCart = (companyDomain: string, cart: CartItem[]) => {
    localStorage.setItem(`${companyDomain}-cart`, JSON.stringify(cart))
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
        setCart,
        getLocalStorageCart,
        setLocalStorageCart,
        addToCart,
        getSubTotal,
        getTotal,
        getTotalItems,
        changeCartItemQuantity
      }}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
