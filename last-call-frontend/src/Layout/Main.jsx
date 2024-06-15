import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Home/Navbar/Navbar"
import Footer from "../Pages/Home/Footer/Footer"
import SignUp from "../Pages/Home/SignUp/SignUp"


function Main() {
  if (SignUp) {
    return <SignUp></SignUp>;
  }
  else 
  return (
    <>
     
          <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default Main