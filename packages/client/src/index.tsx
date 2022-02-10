import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {AppContextProvider, ThemeContextProvider} from "./Context"

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
