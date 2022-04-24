import debug from "debug"
import express from "express"
import createHttpError from "http-errors"
import tenantsService from "../services/tenants.service"

const log: debug.IDebugger = debug("app:tenants-controller")

class TenantsController {
  async listTenants(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const tenants = await tenantsService.list(100, 0)
      res.status(200).send(tenants)
    } catch (e) {
      next(createHttpError(500))
    }
  }

  async searchTenants(req: express.Request, res: express.Response, next: express.NextFunction) {
    // try {
    //   const searchOptions = req.body && req.body.searchOtions
    //   const tenants = await tenantsService.search(searchOptions)
    // } catch (e) {
    //   log(e)
    //   next(createHttpError(500, JSON.stringify(e)))
    // }
  }

  async getTenantById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const tenant = await tenantsService.readById(req.body.id)
      if (tenant) {
        res.status(200).send(tenant)
      } else {
        next(createHttpError(404, `Tenant ${req.body.id} not found`))
      }
    } catch (e) {
      next(createHttpError(500))
    }
  }

  async createTenant(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const tenantId = await tenantsService.create(req.body)
      res.status(201).send({ id: tenantId })
    } catch (e) {
      next(createHttpError(500))
    }
  }

  async patch(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      log(await tenantsService.patchById(req.body.id, req.body))
      res.status(204).send()
    } catch (e) {
      log(e)
      next(createHttpError(500))
    }
  }

  async put(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      await tenantsService.putById(req.body.id, req.body)
      res.status(204).send()
    } catch (e) {
      log(e)
      next(createHttpError(500))
    }
  }

  async removeTenant(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      log(await tenantsService.deleteById(req.body.id))
      res.status(204).send()
    } catch (e) {
      next(createHttpError(500))
    }
  }
}

export default new TenantsController()
