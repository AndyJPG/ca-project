import React, { lazy } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import LazySuspense from "../components/LazySuspense"
import Layout from "../containers/Layout"

const HomePage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./HomePage"))
const OrderPage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./OrderPage"))
const ProductDetailPage = lazy(() => import(/* webpackChunkName: 'product-detail-page' */ "./ProductDetailPage"))

const MenuRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<LazySuspense name="menu home page"><HomePage/><Outlet/></LazySuspense>}>
          <Route path=":productId"
                 element={<LazySuspense name="menu product page"><ProductDetailPage/></LazySuspense>}/>
        </Route>
        <Route path="order" element={<LazySuspense name="menu order page"><OrderPage/></LazySuspense>}/>
      </Route>
      <Route path="*" element={<div>404 not found</div>}/>
    </Routes>
  )
}

export default MenuRoutes