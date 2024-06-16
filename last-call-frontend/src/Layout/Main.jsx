
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


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
