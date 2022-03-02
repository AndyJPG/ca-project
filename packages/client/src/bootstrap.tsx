import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {AppContextProvider, ThemeContextProvider} from "./context"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
