import React, {lazy} from "react"
import {RouteObject, useRoutes} from "react-router-dom"
import {useLocalTenantService} from "@ca/common/services/LocalTenantServiceAdapter"

const HomePage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./HomePage"))
const ProductDetailPage = lazy(() => import(/* webpackChunkName: 'product-detail-page' */ "./ProductDetailPage"))

export const PageRoutes = () => {
  const {tenant} = useLocalTenantService()

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
