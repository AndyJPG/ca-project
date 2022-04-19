import debug from "debug"
import express from "express"
import tenantsService from "../services/tenants.service"

const log: debug.IDebugger = debug("app:tenants-controller")

class TenantsMiddleware {
  async validateSameCompanyDomainDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const tenant = await tenantsService.getTenantByCompanyDomain(req.body.companyDomain)
    if (tenant) {
      res.status(404).send({
        error: "Tenant domain already exists"
      })
    } else {
      next()
    }
  }

  async validateCreateTenantRequiredBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.companyName && req.body.companyDomain) {
      next()
    } else {
      res.status(400).send({
        error: "Missing required fields to create tenant"
      })
    }
  }

  async validateTenantExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const tenant = await tenantsService.readById(req.params.tenantId)
    if (tenant) {
      next()
    } else {
      res.status(400).send({
        error: `Tenant ${req.params.tenantId} not found`
      })
    }
  }

  async extractTenantId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    req.body.id = req.params.tenantId
    next()
  }
}

export default new TenantsMiddleware()
