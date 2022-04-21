import debug from "debug"
import mongooseService from "../../common/services/mongoose.service"
import { CreateTenantDto } from "../dto/create.tenant.dto"
import { PatchTenantDto } from "../dto/patch.tenant.dto"
import { PutTenantDto } from "../dto/put.tenant.dto"

const log: debug.IDebugger = debug("app:in-memory-dao")

interface ITenant extends CreateTenantDto {
  _id: string
}

class TenantsDao {
  Schema = mongooseService.getMongoose().Schema

  tenantSchema = new this.Schema<ITenant>({
    companyDomain: { type: String, unique: true },
    companyName: String,
    companyLogoUrl: String,
    companyAddress: String,
    companyAddressUrl: String,
    companyContactNumber: String
  }, { id: false })

  Tenant = mongooseService.getMongoose().model<ITenant>("Tenants", this.tenantSchema)

  constructor() {
    log("Created new instance of TenantDao")
  }

  async addTenant(tenant: CreateTenantDto) {
    const newTenant = new this.Tenant(tenant)
    await newTenant.save()
    return newTenant._id
  }

  async getTenants(limit = 25, page = 0) {
    const tenantsData = await this.Tenant.find().limit(limit).skip(limit * page).exec()
    return tenantsData.map(tenant => {
      const { _id, ...values } = tenant.toJSON()
      return { ...values, id: _id }
    })
  }

  async getTenantById(tenantId: string) {
    const tenantData = await this.Tenant.findOne({ _id: tenantId }).exec()
    if (!tenantData) {
      return null
    }

    const { _id, ...values } = tenantData.toJSON()
    return { ...values, id: _id }
  }

  async updateTenantById(tenantId: string, tenant: PutTenantDto | PatchTenantDto) {
    return await this.Tenant.findOneAndUpdate(
      { _id: tenantId },
      { $set: tenant },
      { new: true }
    ).exec()
  }

  async removeTenantById(tenantId: string) {
    return this.Tenant.deleteOne({ _id: tenantId }).exec()
  }

  async getTenantByCompanyDomain(companyDomain: string) {
    const tenantData = await this.Tenant.findOne({ companyDomain: companyDomain }).exec()
    if (!tenantData) {
      return null
    }

    const { _id, ...values } = tenantData.toJSON()
    return { ...values, id: _id }
  }
}

export default new TenantsDao()