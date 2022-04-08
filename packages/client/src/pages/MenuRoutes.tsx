import React, { lazy } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import LazySuspense from "../components/LazySuspense"
import Layout from "../containers/Layout"

const HomePage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./HomePage"))
const OrderPage = lazy(() => import(/* webpackChunkName: 'home-page' */ "./OrderPage"))
const ProductDetailPage = lazy(() => import(/* webpackChunkName: 'product-detail-page' */ "./ProductDetailPage"))

const MenuRoutes = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LazySuspense><HomePage/></LazySuspense>}/>
          <Route path="order" element={<LazySuspense><OrderPage/></LazySuspense>}/>
        </Route>
        <Route path="*" element={<div>404 not found</div>}/>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/:productId" element={<LazySuspense><ProductDetailPage/></LazySuspense>}/>
        </Routes>
      )}
    </>
  )
}

export default MenuRoutes