import {CRUD} from "../../common/interfaces/crud.interface"
import TenantDto from "../../../domain/tenant/TenantDto"
import Tenant from "../../../domain/tenant/Tenant"
import {tenantRepository} from "../../../config/database.service"

class TenantsService implements CRUD {
    create(tenant: TenantDto): Promise<Tenant | null> {
        return tenantRepository.addTenant(tenant)
    }

    deleteById(id: string): Promise<any> {
        return Promise.resolve(undefined)
    }

    list(limit: number, page: number): Promise<Tenant[]> {
        return tenantRepository.getTenants()
    }

    patchById(id: string, resource: any): Promise<any> {
        return Promise.resolve(undefined)
    }

    putById(id: string, resource: any): Promise<any> {
        return Promise.resolve(undefined)
    }

    readById(tenantId: string): Promise<Tenant | null> {
        return tenantRepository.getTenantById(tenantId)
    }

}

const tenantsService = new TenantsService()
export default tenantsService
