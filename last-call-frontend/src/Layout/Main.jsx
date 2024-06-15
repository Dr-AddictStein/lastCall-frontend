
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


function Main() {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  
    return (
      <>
        {noHeaderFooter || <Navbar />}

        <Outlet />

        {noHeaderFooter || <Footer />}
      </>
    );
  
}

export default Main;
