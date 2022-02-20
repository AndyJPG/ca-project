import {Navigate, Outlet, RouteObject, useRoutes} from "react-router-dom"
import * as React from "react"
import {HomePage} from "./HomePage"
import {ProductDetailPage} from "./ProductDetailPage"

export const PageRoutes = () => {
  const routes: RouteObject[] = [
    {
      element: <Outlet/>,
      path: "/",
      children: [
        {
          index: true,
          element: <Navigate to="cbd-dumpling-house"/>
        },
        {
          path: "cbd-dumpling-house",
          element: <HomePage/>
        },
        {
          path: "cbd-dumpling-house/:productId",
          element: <ProductDetailPage/>
        }
      ]
    },
    {
      element: <>404 not found</>,
      path: "*"
    }
  ]

  return useRoutes(routes)
}
