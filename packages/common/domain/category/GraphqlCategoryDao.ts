import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"
import {gql} from "@apollo/client"
import {apolloClient} from "../../services/ApolloClient"

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
      return categoriesData.data.categories.data.map((category: any) => ({
        id: category.id,
        name: category.attributes.name,
        tenantId: category.attributes.tenant.data.id
      }))
    },
    getCategoriesWithProductsByTenantId(tenantId: string): Promise<Category[]> {
      return Promise.resolve([])
    }
  }
}
