import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Home/Navbar/Navbar"
import Footer from "../Pages/Home/Footer/Footer"

function Main() {
  return (
      <>
          <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default Main