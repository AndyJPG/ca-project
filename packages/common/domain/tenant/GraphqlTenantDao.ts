import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"


export const GraphqlTenantDao = (): TenantDaoInterface => {
  return {
    async getTenantById(tenantId: string): Promise<Tenant> {
      // const tenantData = await apolloClient.query({
      //   query: gql`
      //     query {
      //       tenant(id: "${tenantId}") {
      //         data {
      //           id
      //           attributes {
      //             companyName
      //           }
      //         }
      //       }
      //     }
      //   `
      // })
      return {
        // id: tenantData.data.tenant.data.id,
        // companyName: tenantData.data.tenant.data.attributes.companyName
        id: "1",
        companyDomain: "cbd-dumpling-house",
        companyName: "CBD dumpling house",
        companyAddress: "Shop FG13C, 148 Bunda St, Canberra ACT 2601",
        companyAddressUrl: "https://www.google.com/maps/place/CBD+Dumpling+House/@-35.2776538,149.1313248,17z/data=!3m1!4b1!4m5!3m4!1s0x6b164d6f52c5649b:0x1f1947da04efabce!8m2!3d-35.2776582!4d149.1335135",
        companyContactNumber: "0262628855",
        companyLogoUrl: "/static/media/logoipsum-logo-21.64ae62c00bb4ed487689fdab9cac825b.svg"
      }
    }
  }
}
