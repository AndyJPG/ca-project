import debug from "debug"
import express from "express"
import tenantsService from "../services/tenants.service"

const log: debug.IDebugger = debug('app:tenants-controller')

class TenantsController {
    async getTenants(req: express.Request, res: express.Response) {
        const tenants = await tenantsService.list(0, 0)
        res.status(200).send(tenants.map(tenant => tenant.toJSON()))
    }

    async getTenantById(req: express.Request, res: express.Response) {
        const tenant = await tenantsService.readById(req.body.id)
        res.status(200).send(tenant?.toJSON())
    }

    async addTenant(req: express.Request, res: express.Response) {
        const tenant = await tenantsService.create(req.body)
        res.status(200).send({id: tenant?.id})
    }
}

const tenantsController = new TenantsController()
export default tenantsController
