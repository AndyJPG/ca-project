import React, {createContext, useContext} from "react"
import {sidePanel$, SidePanelProps} from "../components/SidePanel"
import {productSearch$} from "../components/useProductSearch"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"

interface IRxjsContext {
  openSidePanel: (sidePanelProps: SidePanelProps) => void
  productSearch: (searchResult: CategoryWithProductDto[] | null) => void
}

const RxjsContext = createContext<IRxjsContext>({} as IRxjsContext)

export const RxjsContextProvider: React.FC = (props) => {

  const openSidePanel = (sidePanelProps: SidePanelProps) => {
    sidePanel$.next(sidePanelProps)
  }

  const productSearch = (searchResult: CategoryWithProductDto[] | null) => {
    productSearch$.next({searchResult: searchResult})
  }

  return (
    <RxjsContext.Provider value={{openSidePanel, productSearch}}>
      {props.children}
    </RxjsContext.Provider>
  )
}

export const useRxjsContext = () => useContext(RxjsContext)
