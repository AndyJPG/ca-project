import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore"
import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"
import {db} from "../../index"
import {TenantDto} from "./TenantDto"

export const FirestoreTenantDao = (): TenantDaoInterface => {
  return {
    async getTenantByDomain(tenantDomain: string): Promise<Tenant | null> {
      const tenantsSnapshot = await getDocs(query(collection(db, "mp_tenants"), where("domain", "==", tenantDomain)))

      if (tenantsSnapshot.empty) {
        return null
      }

      const tenant = tenantsSnapshot.docs[0].data() as TenantDto
      const id = tenantsSnapshot.docs[0].id

      return {
        id: id,
        companyDomain: tenant.domain,
        companyName: tenant.company_name,
        companyLogoUrl: tenant.logo_url,
        companyAddress: tenant.address,
        companyAddressUrl: tenant.address_google_url,
        companyContactNumber: tenant.contact_number
      }
    },
    async getTenantById(tenantId: string): Promise<Tenant> {
      const tenantSnap = await getDoc(doc(db, "mp_tenants", tenantId))

      const tenant = tenantSnap.data() as TenantDto

      return {
        id: tenantId,
        companyDomain: tenant.domain,
        companyName: tenant.company_name,
        companyLogoUrl: tenant.logo_url,
        companyAddress: tenant.address,
        companyAddressUrl: tenant.address_google_url,
        companyContactNumber: tenant.contact_number
      }
    }

  }
}