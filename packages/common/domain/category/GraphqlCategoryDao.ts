import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"
import {CategoryWithProductDto} from "./CategoryDto"

const categoriesWithProductsSampleData: CategoryWithProductDto[] = [
  {
    "id": "1",
    "name": "entrees",
    "tenantId": "1",
    "products": [
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
        "productOptions": [
          {
            "name": "choice of dim sim",
            "required": true,
            "singleSelection": true,
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
          },
          {
            "name": "choice of something",
            "required": false,
            "singleSelection": false,
            "options": [
              {
                "name": "duck",
                "price": 3.5
              },
              {
                "name": "chicken",
                "price": 2.5
              },
              {
                "name": "prawn",
                "price": 5
              },
              {
                "name": "veg",
                "price": 2.5
              }
            ]
          }
        ]
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
            "required": true,
            "singleSelection": true,
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
      }
    ]
  },
  {
    "id": "2",
    "name": "dumpling",
    "tenantId": "1",
    "products": [
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
      }
    ]
  },
  {
    "id": "3",
    "name": "vegetables",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "4",
    "name": "noodles",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "5",
    "name": "hot pot",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "6",
    "name": "noodle soup",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "7",
    "name": "seafood",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "8",
    "name": "lamb",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "9",
    "name": "duck",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "10",
    "name": "chicken",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "11",
    "name": "pork",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "13",
    "name": "beef",
    "tenantId": "1",
    "products": [
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
  },
  {
    "id": "14",
    "name": "gluten free",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "15",
    "name": "rice",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "16",
    "name": "extras",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "17",
    "name": "soup",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "18",
    "name": "drinks",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "19",
    "name": "soft drinks",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "20",
    "name": "vegetarian",
    "tenantId": "1",
    "products": []
  },
  {
    "id": "21",
    "name": "vegan",
    "tenantId": "1",
    "products": []
  }
]

export const graphqlCategoryDao = (): CategoryDaoInterface => {
  return {
    async getCategoriesByTenantId(tenantId: string): Promise<Category[]> {
      // const categoriesData = await apolloClient.query({
      //   query: gql`
      //     query {
      //       categories(filters: {tenant: {id : {eq: "${tenantId}"}}}, pagination: {limit: -1}, sort: "sortNumber:asc") {
      //         data {
      //           id
      //           attributes {
      //             name
      //             tenant {
      //               data {
      //                 id
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `
      // })
      return categoriesWithProductsSampleData.map(category => ({
        id: category.id,
        name: category.name,
        tenantId: category.tenantId
      }))
      // return categoriesData.data.categories.data.map((category: any) => graphqlCategoryMapper(category))
    },
    async getCategoriesWithProductsByTenantId(tenantId: string): Promise<CategoryWithProductDto[]> {
      // const categoriesData = await apolloClient.query({
      //   query: gql`
      //     query {
      //       categories(
      //         filters: { tenant: { id: { eq: "${tenantId}" } } }
      //         pagination: { limit: -1 }
      //         sort: "sortNumber:asc"
      //       ) {
      //         data {
      //           id
      //           attributes {
      //             name
      //             tenant {
      //               data {
      //                 id
      //               }
      //             }
      //             products {
      //               data {
      //                 id
      //                 attributes {
      //                   name
      //                   description
      //                   price
      //                   tenant {
      //                     data {
      //                       id
      //                     }
      //                   }
      //                   categories {
      //                     data {
      //                       id
      //                       attributes {
      //                         name
      //                         tenant {
      //                           data {
      //                             id
      //                           }
      //                         }
      //                       }
      //                     }
      //                   }
      //                   product_options {
      //                     data {
      //                       attributes {
      //                         name
      //                         options
      //                       }
      //                     }
      //                   }
      //                   image {
      //                     data {
      //                       id
      //                       attributes {
      //                         url
      //                       }
      //                     }
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `
      // })

      return categoriesWithProductsSampleData

      // return categoriesData.data.categories.data.map((data: any) => {
      //   const category: Category = graphqlCategoryMapper(data)
      //   const products: Product[] = data.attributes.products.data.map((product: any) => graphqlProductMapper(product))
      //   return {...category, products: products}
      // })
    }
  }
}
