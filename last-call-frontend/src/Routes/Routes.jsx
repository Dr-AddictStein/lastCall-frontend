import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../Pages/Home/Home/Home";
import Faq from "../Pages/Home/FAQ/Faq";
import OurStory from "../Pages/Home/OurStory/OurStory";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Restaurants from "../Pages/Dashboard/Restaurants/Restaurants";
import Regions from "../Pages/Dashboard/Regions/Regions";
import Cities from "../Pages/Dashboard/Cities/Cities";
import Users from "../Pages/Dashboard/Users/Users";

import ForRestaurants from "../Pages/Home/ForRestaurants/ForRestaurants";
import FreeSignUp from "../Pages/Home/FreeSignUp/FreeSignUp";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import NewCastle from "../Pages/NewCastle/NewCastle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/ourStory",
        element: <OurStory></OurStory>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/restaurants",
        element: <ForRestaurants></ForRestaurants>,
      },
      {
        path: "/freesignup",
        element: <FreeSignUp></FreeSignUp>
      },
      {
        path: "/newCastle",
        element: <NewCastle></NewCastle>
      }
    ],
  },
  // Dashboard pages routes
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "restaurants",
        element: <Restaurants></Restaurants>,
      },
      {
        path: "regions",
        element: <Regions></Regions>,
      },
      {
        path: "cities",
        element: <Cities></Cities>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
]);
