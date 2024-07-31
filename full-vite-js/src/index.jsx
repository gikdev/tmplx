// import "./i18n"
import { App } from "@/components"
import React from "react"
import ReactDOM from "react-dom/client"

const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
