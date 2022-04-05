import Tenant from "../domain/tenant/Tenant"
import Category from "../domain/category/Category"
import Product from "../domain/product/Product"
import CartItem from "../domain/cart/CartItem"
import {ProductOptions} from "../domain/product/ProductOption"
import CategoryWithProducts from "../domain/category/CategoryWithProducts"

export interface LocalTenantService {
  tenant: Tenant | null

  setTenant(tenant: Tenant | null): void
}

export interface LocalCategoryService {
  categories: Category[] | null
  categoriesWithProduct: CategoryWithProducts[]

  setCategories(data: Category[]): void

  setCategoriesWithProduct(data: CategoryWithProducts[]): void
}

export interface LocalProductService {
  products: Product[] | null

  setProducts(data: Product[] | null): void
}

export interface LocalProductSearchService {
  searchResult: CategoryWithProducts[] | null

  setSearchResult(data: CategoryWithProducts[] | null): void
}

export interface LocalCartService {
  cart: CartItem[]

  initializeCart(companyDomain: string): void

  changeCartItemQuantity(id: string, newQuantity: number): void

  addToCart(product: Product, quantity: number, productOptions: ProductOptions[]): void

  getTotalItems(): number

  getSubTotal(): number

  getTotal(): number
}
