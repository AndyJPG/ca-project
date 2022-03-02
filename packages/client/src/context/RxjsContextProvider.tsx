import React, {createContext, useContext} from "react"
import {sidePanel$, SidePanelProps} from "../components/SidePanel"

interface IRxjsContext {
  openSidePanel: (sidePanelProps: SidePanelProps) => void
}

const RxjsContext = createContext<IRxjsContext>({} as IRxjsContext)

export const RxjsContextProvider: React.FC = (props) => {

  const openSidePanel = (sidePanelProps: SidePanelProps) => {
    const {children, anchor, showCloseIcon, open} = sidePanelProps
    sidePanel$.next({children, anchor, showCloseIcon, open})
  }

  return (
    <RxjsContext.Provider value={{openSidePanel}}>
      {props.children}
    </RxjsContext.Provider>
  )
}

export const useRxjsContext = () => useContext(RxjsContext)
