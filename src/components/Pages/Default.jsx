import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Nav from "../Header/Nav"
const Default = () => {
  return (
    <>
    <Nav/>
     <Outlet/>
    <Footer/>
    </>
  )
}

export default Default