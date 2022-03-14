import Tenant from "../domain/tenant/Tenant"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"
import Category from "../domain/category/Category"
import Product from "../domain/product/Product"
import CartItem from "../domain/cart/CartItem"

export interface LocalTenantService {
  tenant: Tenant | null

  setTenant(tenant: Tenant | null): void
}

export interface LocalCategoryService {
  categories: Category[] | null
  categoriesWithProduct: CategoryWithProductDto[]

  setCategories(data: Category[]): void

  setCategoriesWithProduct(data: CategoryWithProductDto[]): void
}

export interface LocalProductService {
  products: Product[] | null

  setProducts(data: Product[] | null): void
}

export interface LocalProductSearchService {
  searchResult: CategoryWithProductDto[] | null

  setSearchResult(data: CategoryWithProductDto[] | null): void
}

export interface LocalCartService {
  cart: CartItem[]

  addToCart(product: Product, quantity: number): void

  getTotalItems(): number

  getTotal(): number
}
