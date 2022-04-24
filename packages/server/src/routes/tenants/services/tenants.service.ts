import { CRUD } from "../../common/interfaces/crud.interface"
import TenantsDao from "../daos/tenants.dao"
import { PatchTenantDto } from "../dto/patch.tenant.dto"
import { PutTenantDto } from "../dto/put.tenant.dto"
import { TenantDto } from "../dto/tenant.dto"
import { TenantSearchOptions } from "../tenantSearchOptions"

class TenantsService implements CRUD {
  async create(tenant: TenantDto): Promise<string> {
    return TenantsDao.addTenant(tenant)
  }

  async deleteById(id: string): Promise<void> {
    return TenantsDao.removeTenantById(id)
  }

  async list(limit: number, page: number): Promise<TenantDto[]> {
    return TenantsDao.getTenants(limit, page)
  }

  async search(searchOptions?: TenantSearchOptions): Promise<TenantDto[]> {
    return TenantsDao.searchTenants(searchOptions)
  }

  async patchById(tenantId: string, tenant: PatchTenantDto): Promise<void> {
    return TenantsDao.updateTenantById(tenantId, tenant)
  }

  async putById(id: string, tenant: PutTenantDto): Promise<void> {
    return TenantsDao.updateTenantById(id, tenant)
  }

  async readById(tenantId: string): Promise<TenantDto | null> {
    return TenantsDao.getTenantById(tenantId)
  }

  async getTenantByCompanyDomain(companyDomain: string): Promise<TenantDto | null> {
    return TenantsDao.getTenantByCompanyDomain(companyDomain)
  }
}

export default new TenantsService()
