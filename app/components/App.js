import React, { useEffect } from "react"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function App() {
  return (
    <div className="container-fluid bg-red-100">
      <div className="container border border-red-400 p-0">
        <div className="header">
          <Header />
        </div>
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App
