import React, {createContext, useContext} from "react"
import {sidePanel$, SidePanelProps} from "../components/SidePanel"
import {productSearch$} from "../components/useProductSearch"
import {appDialog$, AppDialogProps} from "../components/AppDialog"
import CategoryWithProducts from "@ca/common/domain/category/CategoryWithProducts"

interface IRxjsContext {
  openSidePanel: (sidePanelProps: SidePanelProps) => void
  productSearch: (searchResult: CategoryWithProducts[] | null) => void
  openAppDialog: (appDialogProps: AppDialogProps) => void
}

const RxjsContext = createContext<IRxjsContext>({} as IRxjsContext)

export const RxjsContextProvider: React.FC = (props) => {

  const openSidePanel = (sidePanelProps: SidePanelProps) => {
    sidePanel$.next(sidePanelProps)
  }

  const productSearch = (searchResult: CategoryWithProducts[] | null) => {
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
