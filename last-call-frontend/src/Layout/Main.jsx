import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Home/Navbar/Navbar"

function Main() {
  return (
      <>
          <Navbar></Navbar>
          <Outlet></Outlet>
    </>
  )
}
export default Main