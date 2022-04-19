import debug from "debug"
import shortid from "shortid"
import { CreateTenantDto } from "../dto/create.tenant.dto"
import { PatchTenantDto } from "../dto/patch.tenant.dto"
import { PutTenantDto } from "../dto/put.tenant.dto"
import { TenantDto } from "../dto/tenant.dto"

const log: debug.IDebugger = debug("app:in-memory-dao")

class TenantsDao {
  tenants: Array<TenantDto> = []

  constructor() {
    log("Created new instance of TenantDao")
  }

  async addTenant(tenant: CreateTenantDto) {
    const id = shortid.generate()
    this.tenants.push({ ...tenant, id })
    return id
  }

  async getTenants() {
    return this.tenants
  }

  async getTenantById(tenantId: string) {
    return this.tenants.find((tenant: { id: string }) => tenant.id === tenantId)
  }

  async putTenantById(tenantId: string, tenant: PutTenantDto) {
    const tenantIndex = this.tenants.findIndex((tenant: { id: string }) => tenant.id === tenantId)
    this.tenants.splice(tenantIndex, 1, tenant)
    return `${tenant.id} updated via put`
  }

  async patchTenantById(tenantId: string, tenant: PatchTenantDto) {
    const tenantIndex = this.tenants.findIndex((tenant: { id: string }) => tenant.id === tenantId)
    const currentTenant = this.tenants[tenantIndex]
    const allowedPatchFields = [
      "companyName",
      "companyLogoUrl",
      "companyAddress",
      "companyAddressUrl",
      "companyContactNumber"
    ]
    for (const field of allowedPatchFields) {
      if (field in tenant) {
        // @ts-ignore
        currentTenant[field] = tenant[field]
      }
    }
    this.tenants.splice(tenantIndex, 1, currentTenant)
    return `${tenant.id} patched`
  }

  async removeTenantById(tenantId: string) {
    const tenantIndex = this.tenants.findIndex((tenant: { id: string }) => tenant.id === tenantId)
    this.tenants.splice(tenantIndex, 1)
    return `${tenantId} removed`
  }

  async getTenantByCompanyDomain(companyDomain: string) {
    const tenantIndex = this.tenants.findIndex((tenant) => tenant.companyDomain === companyDomain)
    const currentTenant = this.tenants[tenantIndex]
    if (currentTenant) {
      return currentTenant
    } else {
      return null
    }
  }
}

export default new TenantsDao()