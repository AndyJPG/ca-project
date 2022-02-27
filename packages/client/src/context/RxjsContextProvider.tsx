import React, {createContext, useContext} from "react"
import {sidePanel$} from "../components/SidePanel"

interface IRxjsContext {
  openSidePanel: (children: React.ReactNode, anchor?: "top" | "left" | "bottom" | "right") => void
}

const RxjsContext = createContext<IRxjsContext>({} as IRxjsContext)

export const RxjsContextProvider: React.FC = (props) => {

  const openSidePanel = (children: React.ReactNode, anchor?: "top" | "left" | "bottom" | "right") => {
    sidePanel$.next({children, anchor})
  }

  return (
    <RxjsContext.Provider value={{openSidePanel}}>
      {props.children}
    </RxjsContext.Provider>
  )
}

export const useRxjsContext = () => useContext(RxjsContext)
