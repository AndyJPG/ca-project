import {RouteObject, useRoutes} from "react-router-dom"
import {HomePage} from "./HomePage"
import * as React from "react"

export const PageRoutes = () => {
  const routes: RouteObject[] = [
    {
      element: <HomePage/>,
      path: "/"
    },
    {
      element: <>404 not found</>,
      path: "*"
    }
  ]

  return useRoutes(routes)
}
