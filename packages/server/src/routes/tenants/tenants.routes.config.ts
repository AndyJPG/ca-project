import express from "express"
import { body } from "express-validator"
import { CommonRoutesConfig } from "../common/common.routes.config"
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware"
import TenantsController from "./controllers/tenants.controller"
import tenantsMiddleware from "./middleware/tenants.middleware"
import TenantsMiddleware from "./middleware/tenants.middleware"

export default class TenantsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "TenantsRoutes")
  }

  configureRoutes(): express.Application {
    this.app.route("/tenants")
      .get(TenantsController.listTenants)
      .post(
        tenantsMiddleware.validateCreateTenantRequiredBodyFields,
        TenantsMiddleware.validateSameCompanyDomainDoesntExist,
        TenantsController.createTenant
      )

    this.app.param(`tenantId`, TenantsMiddleware.extractTenantId)
    this.app.route("/tenants/:tenantId")
      .all(TenantsMiddleware.validateTenantExists)
      .get(TenantsController.getTenantById)
      .delete(TenantsController.removeTenant)

    this.app.put("/tenants/:tenantId", [
      body("companyDomain").isString(),
      body("companyName").isString(),
      body("companyLogoUrl").isString().optional(),
      body("companyAddress").isString().optional(),
      body("companyAddressUrl").isString().optional(),
      body("companyContactNumber").isString().optional(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      TenantsController.put
    ])

    this.app.patch("/tenants/:tenantId", [
      body("companyDomain").isString(),
      body("companyName").isString(),
      body("companyLogoUrl").isString().optional(),
      body("companyAddress").isString().optional(),
      body("companyAddressUrl").isString().optional(),
      body("companyContactNumber").isString().optional(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      TenantsController.patch
    ])

    return this.app
  }
}
