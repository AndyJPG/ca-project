import express from "express"
import tenantsService from "../services/tenants.service"

class TenantsMiddleware {
    async validateTenantExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const tenant = await tenantsService.readById(req.params.tenantId)
        if (tenant) {
            next()
        } else {
            res.status(404).send({
                error: `Tenant ${req.params.tenantId} not found`
            })
        }
    }

    async validateCreateTenantRequiredBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const {companyName} = req.body
        if (companyName) {
            next()
        } else {
            res.status(400).send({
                error: 'Missing required fields to create tenant'
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

const tenantsMiddleware = new TenantsMiddleware()
export default tenantsMiddleware
