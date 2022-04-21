import debug from "debug"
import express from "express"
import createHttpError from "http-errors"
import tenantsService from "../services/tenants.service"

const log: debug.IDebugger = debug("app:tenants-controller")

class TenantsMiddleware {
  async validateSameCompanyDomainDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const tenant = await tenantsService.getTenantByCompanyDomain(req.body.companyDomain)
      if (tenant) {
        next(createHttpError(400, "Tenant domain already exists"))
      } else {
        next()
      }
    } catch (e) {
      next(createHttpError(500))
    }
  }

  async validateCreateTenantRequiredBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.companyDomain && req.body.companyName) {
      next()
    } else {
      next(createHttpError(400, "Missing required fields to create tenant"))
    }
  }

  async validateTenantExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const tenant = await tenantsService.readById(req.params.tenantId)
      if (tenant) {
        next()
      } else {
        next(createHttpError(400, `Tenant ${req.params.tenantId} not found`))
      }
    } catch (e) {
      next(createHttpError(500))
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
