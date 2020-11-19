import React from "react"
import "../css/main.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [toggle, setToggle] = React.useState(false)
  const navToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <Navbar navToggle={navToggle} toggle={toggle} />
      {children}

      <Footer />
    </>
  )
}

export default Layout
