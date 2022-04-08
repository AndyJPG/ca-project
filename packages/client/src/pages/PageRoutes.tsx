import { useLocalTenantService } from "@ca/common/services/LocalTenantService"
import React, { lazy } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import LazySuspense from "../components/LazySuspense"

const MenuRoutes = lazy(() => import(/* webpackChunkName: 'menu-routes' */ "./MenuRoutes"))

export const PageRoutes = () => {
  const { tenant } = useLocalTenantService()

  return (
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<div>Home page</div>}/>
        {tenant && <Route path={`${tenant.companyDomain}/*`} element={<LazySuspense><MenuRoutes/></LazySuspense>}/>}
        <Route path="*" element={<div>404 not found</div>}/>
      </Route>
    </Routes>
  )
}
