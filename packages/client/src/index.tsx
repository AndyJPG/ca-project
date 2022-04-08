import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { AppContextProvider, ThemeContextProvider } from "./context"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
