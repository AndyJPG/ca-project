import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"
import {gql} from "@apollo/client"
import {apolloClient} from "../../services/ApolloClient"
import {CategoryWithProductDto} from "./CategoryDto"
import Product from "../product/Product"
import {graphqlCategoryMapper} from "./GraphqlCategoryMapper"
import {graphqlProductMapper} from "../product/GraphqlProductMapper"

export const graphqlCategoryDao = (): CategoryDaoInterface => {
  return {
    async getCategoriesByTenantId(tenantId: string): Promise<Category[]> {
      const categoriesData = await apolloClient.query({
        query: gql`
          query {
            categories(filters: {tenant: {id : {eq: "${tenantId}"}}}, pagination: {limit: -1}, sort: "sortNumber:asc") {
              data {
                id
                attributes {
                  name
                  tenant {
                    data {
                      id
                    }
                  }
                }
              }
            }
          }
        `
      })
      return categoriesData.data.categories.data.map((category: any) => graphqlCategoryMapper(category))
    },
    async getCategoriesWithProductsByTenantId(tenantId: string): Promise<CategoryWithProductDto[]> {
      const categoriesData = await apolloClient.query({
        query: gql`
          query {
            categories(
              filters: { tenant: { id: { eq: "${tenantId}" } } }
              pagination: { limit: -1 }
              sort: "sortNumber:asc"
            ) {
              data {
                id
                attributes {
                  name
                  tenant {
                    data {
                      id
                    }
                  }
                  products {
                    data {
                      id
                      attributes {
                        name
                        description
                        price
                        tenant {
                          data {
                            id
                          }
                        }
                        categories {
                          data {
                            id
                            attributes {
                              name
                              tenant {
                                data {
                                  id
                                }
                              }
                            }
                          }
                        }
                        product_options {
                          data {
                            attributes {
                              name
                              options
                            }
                          }
                        }
                        image {
                          data {
                            id
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })

      return categoriesData.data.categories.data.map((data: any) => {
        const category: Category = graphqlCategoryMapper(data)
        const products: Product[] = data.attributes.products.data.map((product: any) => graphqlProductMapper(product))
        return {...category, products: products}
      })
    }
  }
}
