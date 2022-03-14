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

const sampleProductsData = [
  {
    "id": "3",
    "tenantId": "1",
    "name": "seafood spring roll",
    "description": "four per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 9.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "4",
    "tenantId": "1",
    "name": "duck spring roll",
    "description": "two per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 9.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "5",
    "tenantId": "1",
    "name": "sesame prawn toasts",
    "description": "two per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 9.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "6",
    "tenantId": "1",
    "name": "marinated cucumber",
    "description": "",
    "ingredients": ["seafood", "veg"],
    "price": 99,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "7",
    "tenantId": "1",
    "name": "vegetable spring roll",
    "description": "two per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 7.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "9",
    "tenantId": "1",
    "name": "mixed entree",
    "description": "spring roll, prawn toast & fried dim sim",
    "ingredients": ["seafood", "veg"],
    "price": 9.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "10",
    "tenantId": "1",
    "name": "duck pancakes",
    "description": "two per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 12,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "8",
    "tenantId": "1",
    "name": "dim sim",
    "description": "two per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 7.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
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
  },
  {
    "id": "11",
    "tenantId": "1",
    "name": "san choy bao",
    "description": "four per serves.",
    "ingredients": ["seafood", "veg"],
    "price": 17.4,
    "imageUrl": null,
    "categories": [
      {
        "id": "1",
        "name": "entrees",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "1",
    "tenantId": "1",
    "name": "pan fired pork dumpling",
    "description": "Twelve pieces",
    "ingredients": ["seafood", "veg"],
    "price": 15.2,
    "imageUrl": "/uploads/c001a013_9427_4815_a1ad_78a7d87bc0a7_4119614133.jpeg",
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "12",
    "tenantId": "1",
    "name": "special dumpling",
    "description": "ten pieces.",
    "ingredients": ["seafood", "veg"],
    "price": 15.8,
    "imageUrl": "/uploads/83346e61_d930_4ccf_b2a8_439a5e0319da_a7029ce0da.jpeg",
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "13",
    "tenantId": "1",
    "name": "shanghai pork dumpling",
    "description": "six pieces. steam",
    "ingredients": ["seafood", "veg"],
    "price": 15.2,
    "imageUrl": "/uploads/b0319908_9784_4f35_8228_890edc14bf7e_b762b2dbba.jpeg",
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "14",
    "tenantId": "1",
    "name": "vegetable bun",
    "description": "three pieces. Steamed",
    "ingredients": ["seafood", "veg"],
    "price": 14.2,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "15",
    "tenantId": "1",
    "name": "fried leek dumpling",
    "description": "two pieces.",
    "ingredients": ["seafood", "veg"],
    "price": 11.8,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "16",
    "tenantId": "1",
    "name": "BBQ pork bun",
    "description": "Three pieces. Steamed",
    "ingredients": ["seafood", "veg"],
    "price": 14.2,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "17",
    "tenantId": "1",
    "name": "boiled pork dumpling",
    "description": "fourteen pieces",
    "ingredients": ["seafood", "veg"],
    "price": 14.2,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "18",
    "tenantId": "1",
    "name": "boild prawn and pumpkin dumpling",
    "description": "fourteen pieces",
    "ingredients": ["seafood", "veg"],
    "price": 16.6,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "19",
    "tenantId": "1",
    "name": "boild mixture dumpling",
    "description": "fourteen pieces.",
    "ingredients": ["seafood", "veg"],
    "price": 16.6,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "20",
    "tenantId": "1",
    "name": "boiled beef dumpling",
    "description": "fourteen pieces",
    "ingredients": ["seafood", "veg"],
    "price": 14.2,
    "imageUrl": null,
    "categories": [
      {
        "id": "2",
        "name": "dumpling",
        "tenantId": "1"
      }
    ],
    "productOptions": []
  },
  {
    "id": "2",
    "tenantId": "1",
    "name": "shredded dry chilli beef",
    "description": "",
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
    "productOptions": []
  }
]

export const GraphqlProductDao = (): ProductDaoInterface => {
  return {
    getProductById(productId: string): Promise<Product | null> {
      return Promise.resolve(sampleProductsData.find(product => product.id === productId) || null)
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
