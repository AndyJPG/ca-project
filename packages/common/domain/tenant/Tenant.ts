import Category from "../category/Category"

export default interface Tenant {
  id: string
  companyName: string
  categories: Category[]
}
