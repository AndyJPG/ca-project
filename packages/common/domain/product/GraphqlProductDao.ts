import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"
import {apolloClient} from "../../services/ApolloClient"
import {gql} from "@apollo/client"
import {graphqlProductMapper} from "./GraphqlProductMapper"

export const GraphqlProductDao = (): ProductDaoInterface => {
  return {
    getProducts(): Promise<Product[]> {
      return Promise.resolve([])
    },
    async getProductsByTenantId(tenantId: string): Promise<Product[]> {
      const productsData = await apolloClient.query({
        query: gql`
        query {
          products(pagination: { limit: -1 }, filters: {tenant: {id : {eq: "${tenantId}"}}}) {
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
        `
      })
      return productsData.data.products.data.map((product: any) => graphqlProductMapper(product))
    }
  }
}
