import React, {createContext, useContext, useState} from "react"
import Tenant from "@ca/common/domain/tenant/Tenant"
import Category from "@ca/common/domain/category/Category"
import Product from "@ca/common/domain/product/Product"
import CartItem from "@ca/common/domain/cart/CartItem"
import {Decimal} from "decimal.js"
import shortid from "shortid"
import {ProductOptions} from "@ca/common/domain/product/ProductOption"
import CategoryWithProducts from "@ca/common/domain/category/CategoryWithProducts"

interface IAppContext {
  tenant: Tenant | null
  setTenant: (tenant: Tenant | null) => void
  categories: Category[] | null
  setCategories: (categories: Category[]) => void
  categoriesWithProduct: CategoryWithProducts[]
  setCategoriesWithProduct: (categories: CategoryWithProducts[]) => void
  cart: CartItem[]
  initializeCart: (companyDomain: string) => void
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
  const [categoriesWithProduct, setCategoriesWithProduct] = useState<CategoryWithProducts[]>([])
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

  const initializeCart = (companyDomain: string) => {
    const localCart = localStorage.getItem(`${companyDomain}-cart`)
    if (localCart) {
      const cart = JSON.parse(localCart) as { cart: CartItem[], ttl: number }
      if (cart.ttl > Date.now()) {
        setCart(cart.cart)
      }
    }
  }

  const setLocalStorageCart = (companyDomain: string, cart: CartItem[]) => {
    localStorage.setItem(`${companyDomain}-cart`, JSON.stringify({cart: cart, ttl: Date.now() + (12 * 60 * 60 * 1000)}))
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
        initializeCart,
        addToCart,
        getSubTotal,
        getTotal,
        getTotalItems,
        changeCartItemQuantity
      }}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
