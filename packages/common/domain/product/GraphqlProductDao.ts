import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"
import {apolloClient} from "../../services/ApolloClient"
import {gql} from "@apollo/client"
import {graphqlProductMapper} from "./GraphqlProductMapper"

const sampleProductData = {
  "id": "2",
  "tenantId": "1",
  "name": "shredded dry chilli beef",
  "description": "Shredded dry chilli beef",
  "ingredients": ["seafood", "veg"],
  "price": 19.6,
  "imageUrl": "https://d1ralsognjng37.cloudfront.net/b7f6e999-8e87-44ce-9f17-28e69fe5b83a.jpeg",
  "categories": [
    {
      "id": "13",
      "name": "beef",
      "tenantId": "1"
    }
  ],
  "productOptions": [
    {
      "name": "choice of dim sim",
      "options": [
        {
          "name": "fried",
          "price": 0
        },
        {
          "name": "steamed",
          "price": 0
        }
      ]
    }
  ]
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
