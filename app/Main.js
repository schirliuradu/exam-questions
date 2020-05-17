import React, { useEffect } from "react"
import ReactDom from "react-dom"

// My Components
import App from "./components/App"

function Main() {
  return <App />
}

ReactDom.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
