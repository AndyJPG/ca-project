import {RouteObject, useRoutes} from "react-router-dom"
import * as React from "react"
import {HomePage} from "./HomePage"
import {ProductDetailPage} from "./ProductDetailPage"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"

export const PageRoutes = () => {
  const {tenant} = useLocalTenantStateService()

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <p>Your menu</p>
    },
    {
      path: "*",
      element: <>404 not found</>
    }
  ]

  if (tenant) {
    const {companyDomain} = tenant

    routes.push(
      {
        path: `/${companyDomain}`,
        element: <HomePage/>
      },
      {
        path: `/${companyDomain}/:productId`,
        element: <ProductDetailPage/>
      }
    )
  }

  return useRoutes(routes)
}
