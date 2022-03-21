import React, {lazy} from "react"
import {Route, RouteObject, Routes, useLocation, useRoutes} from "react-router-dom"
import {useLocalTenantService} from "@ca/common/services/LocalTenantService"
import OrderPage from "./OrderPage"
import Layout from "../containers/Layout"

const HomePage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./HomePage"))
const ProductDetailPage = lazy(() => import(/* webpackChunkName: 'product-detail-page' */ "./ProductDetailPage"))

export const PageRoutes = () => {
  const {tenant} = useLocalTenantService()
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

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
        path: `/${companyDomain}/order`,
        element: <OrderPage/>
      }
    )
  }

  const routesElement = useRoutes(routes, state?.backgroundLocation || location)

  return (
    <>
      {routesElement}
      {state?.backgroundLocation && tenant && (
        <Routes>
          <Route path={`/${tenant.companyDomain}/:productId`} element={<ProductDetailPage/>}/>
        </Routes>
      )}
    </>
  )
}
