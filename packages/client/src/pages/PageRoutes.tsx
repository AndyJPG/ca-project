import React, {lazy} from "react"
import {RouteObject, useRoutes} from "react-router-dom"
import {useLocalTenantService} from "@ca/common/services/LocalTenantServiceAdapter"
import OrderPage from "./OrderPage"
import Layout from "../containers/Layout"

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
        element: <Layout/>,
        children: [
          {index: true, element: <HomePage/>},
          {path: "order", element: <OrderPage/>}
        ]
      },
      {
        path: `/${companyDomain}/:productId`,
        element: <ProductDetailPage/>
      },
      {
        path: `/${companyDomain}/order`,
        element: <OrderPage/>
      }
    )
  }

  return useRoutes(routes)
}
