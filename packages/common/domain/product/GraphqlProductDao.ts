import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"
import {apolloClient} from "../../services/ApolloClient"
import {gql} from "@apollo/client"

export const GraphqlProductDao = (): ProductDaoInterface => {
  return {
    getProducts(): Promise<Product[]> {
      return Promise.resolve([])
    },
    async getProductsByTenantId(tenantId: string): Promise<Product[]> {
      const productsData = await apolloClient.query({
        query: gql`
        query {
          products(pagination: { limit: -1 }, filters: {tenant: {id : {eq: "1"}}}) {
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
      return productsData.data.products.data.map((product: any) => {
        const productAttributes = product.attributes
        return {
          id: product.id,
          tenantId: productAttributes.tenant.data.id,
          name: productAttributes.name,
          description: productAttributes.description,
          price: productAttributes.price,
          imageUrl: productAttributes.image.data ? productAttributes.image.data.attributes.url : null,
          categories: productAttributes.categories.data.map((category: any) => ({
            id: category.id,
            name: category.attributes.name,
            tenantId: category.attributes.tenant.data.id
          })),
          productOptions: productAttributes.product_options.data.map((productOptions: any) => ({
            name: productOptions.attributes.name,
            options: productOptions.attributes.options.map((productOption: any) => ({
              name: productOption.name,
              price: productOption.price
            }))
          }))
        }
      })
    }
  }
}
