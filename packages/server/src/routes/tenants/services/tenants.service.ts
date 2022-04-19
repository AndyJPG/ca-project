import { CRUD } from "../../common/interfaces/crud.interface"
import TenantsDao from "../daos/tenants.dao"
import { PatchTenantDto } from "../dto/patch.tenant.dto"
import { PutTenantDto } from "../dto/put.tenant.dto"
import { TenantDto } from "../dto/tenant.dto"

class TenantsService implements CRUD {
  async create(tenant: TenantDto): Promise<string> {
    return TenantsDao.addTenant(tenant)
  }

  async deleteById(id: string): Promise<string> {
    return TenantsDao.removeTenantById(id)
  }

  async list(limit: number, page: number): Promise<TenantDto[]> {
    return TenantsDao.getTenants()
  }

  async patchById(tenantId: string, tenant: PatchTenantDto): Promise<string> {
    return TenantsDao.patchTenantById(tenantId, tenant)
  }

  async putById(id: string, tenant: PutTenantDto): Promise<string> {
    return TenantsDao.putTenantById(id, tenant)
  }

  async readById(tenantId: string): Promise<TenantDto | null> {
    return TenantsDao.getTenantById(tenantId)
  }

  async getTenantByCompanyDomain(companyDomain: string): Promise<TenantDto | null> {
    return TenantsDao.getTenantByCompanyDomain(companyDomain)
  }
}

export default new TenantsService()
