import debug from "debug"
import express from "express"
import createHttpError from "http-errors"
import tenantsService from "../services/tenants.service"

const log: debug.IDebugger = debug("app:tenants-controller")

class TenantsController {
  async listTenants(req: express.Request, res: express.Response) {
    //TODO: Implement error handling
    const tenants = await tenantsService.list(100, 0)
    res.status(200).send(tenants)
  }

  async getTenantById(req: express.Request, res: express.Response) {
    //TODO: Implement error handling
    const tenant = await tenantsService.readById(req.body.id)
    res.status(200).send(tenant)
  }

  async createTenant(req: express.Request, res: express.Response) {
    //TODO: Implement error handling
    const tenantId = await tenantsService.create(req.body)
    res.status(201).send({ id: tenantId })
  }

  async patch(req: express.Request, res: express.Response) {
    //TODO: Implement error handling
    log(await tenantsService.patchById(req.body.id, req.body))
    res.status(204).send()
  }

  async put(req: express.Request, res: express.Response, next: express.NextFunction) {
    //TODO: Implement error handling
    try {
      log(await tenantsService.putById(req.body.id, req.body))
      res.status(204).send()
    } catch (e) {
      next(createHttpError(400, "Fail to update tenant"))
    }
  }

  async removeTenant(req: express.Request, res: express.Response) {
    //TODO: Implement error handling
    log(await tenantsService.deleteById(req.body.id))
    res.status(204).send()
  }
}

export default new TenantsController()
