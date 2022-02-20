import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"
import {apolloClient} from "../../services/ApolloClient"
import {gql} from "@apollo/client"
import {graphqlProductMapper} from "./GraphqlProductMapper"

const sampleProductData = {
  "id": "2",
  "tenantId": "1",
  "name": "shredded dry chilli beef",
  "description": "",
  "ingredients": ["seafood", "veg"],
  "price": 19.6,
  "imageUrl": "/uploads/b7f6e999_8e87_44ce_9f17_28e69fe5b83a_385b7fbaf9.jpeg",
  "categories": [
    {
      "id": "13",
      "name": "beef",
      "tenantId": "1"
    }
  ],
  "productOptions": []
}

export const GraphqlProductDao = (): ProductDaoInterface => {
  return {
    getProductById(productId: string): Promise<Product> {
      return Promise.resolve(sampleProductData)
    },
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
