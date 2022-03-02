import React, {lazy} from "react"
import {RouteObject, useRoutes} from "react-router-dom"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"

const HomePage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./HomePage"))
const ProductDetailPage = lazy(() => import(/* webpackChunkName: 'product-detail-page' */ "./ProductDetailPage"))

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
