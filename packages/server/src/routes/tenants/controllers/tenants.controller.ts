import debug from "debug"
import express from "express"
import tenantsService from "../services/tenants.service"

const log: debug.IDebugger = debug("app:tenants-controller")

class TenantsController {
  async listTenants(req: express.Request, res: express.Response) {
    const tenants = await tenantsService.list(100, 0)
    res.status(200).send(tenants)
  }

  async getTenantById(req: express.Request, res: express.Response) {
    const tenant = await tenantsService.readById(req.body.id)
    res.status(200).send(tenant)
  }

  async createTenant(req: express.Request, res: express.Response) {
    const tenantId = await tenantsService.create(req.body)
    res.status(201).send({ id: tenantId })
  }

  async patch(req: express.Request, res: express.Response) {
    log(await tenantsService.patchById(req.body.id, req.body))
    res.status(204).send()
  }

  async put(req: express.Request, res: express.Response) {
    log(await tenantsService.putById(req.body.id, req.body))
    res.status(204).send()
  }

  async removeUser(req: express.Request, res: express.Response) {
    log(await tenantsService.deleteById(req.body.id))
    res.status(204).send()
  }
}

export default new TenantsController()
