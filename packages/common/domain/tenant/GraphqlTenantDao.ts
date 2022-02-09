import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"
import {apolloClient} from "../../services/ApolloClient"
import {gql} from "@apollo/client"


export const GraphqlTenantDao = (): TenantDaoInterface => {
  return {
    async getTenantById(tenantId: string): Promise<Tenant> {
      const tenantData = await apolloClient.query({
        query: gql`
          query {
            tenant(id: "${tenantId}") {
              data {
                id
                attributes {
                  companyName
                }
              }
            }
          }
        `
      })
      return {
        id: tenantData.data.tenant.data.id,
        companyName: tenantData.data.tenant.data.attributes.companyName
      }
    }
  }
}
