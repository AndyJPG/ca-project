import React, {createContext, useContext} from "react"
import {sidePanel$, SidePanelProps} from "../components/SidePanel"
import {productSearch$} from "../components/useProductSearch"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {appDialog$, AppDialogProps} from "../components/AppDialog"

interface IRxjsContext {
  openSidePanel: (sidePanelProps: SidePanelProps) => void
  productSearch: (searchResult: CategoryWithProductDto[] | null) => void
  openAppDialog: (appDialogProps: AppDialogProps) => void
}

const RxjsContext = createContext<IRxjsContext>({} as IRxjsContext)

export const RxjsContextProvider: React.FC = (props) => {

  const openSidePanel = (sidePanelProps: SidePanelProps) => {
    sidePanel$.next(sidePanelProps)
  }

  const productSearch = (searchResult: CategoryWithProductDto[] | null) => {
    productSearch$.next({searchResult: searchResult})
  }

  const openAppDialog = (appDialogProps: AppDialogProps) => {
    appDialog$.next(appDialogProps)
  }

  return (
    <RxjsContext.Provider value={{openSidePanel, productSearch, openAppDialog}}>
      {props.children}
    </RxjsContext.Provider>
  )
}

export const useRxjsContext = () => useContext(RxjsContext)
