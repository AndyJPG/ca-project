import React, {createContext, useContext} from "react"
import {sidePanel$} from "../components/SidePanel"

interface IRxjsContext {
  openSidePanel: (children: React.ReactNode, anchor?: "top" | "left" | "bottom" | "right", closeIcon?: boolean) => void
}

const RxjsContext = createContext<IRxjsContext>({} as IRxjsContext)

export const RxjsContextProvider: React.FC = (props) => {

  const openSidePanel = (children: React.ReactNode, anchor?: "top" | "left" | "bottom" | "right", closeIcon?: boolean) => {
    sidePanel$.next({children, anchor, closeIcon})
  }

  return (
    <RxjsContext.Provider value={{openSidePanel}}>
      {props.children}
    </RxjsContext.Provider>
  )
}

export const useRxjsContext = () => useContext(RxjsContext)
