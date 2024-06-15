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
import SignUp from "../Pages/Home/SignUp/SignUp";

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
      }, {
        path: '/signup',
        element: <SignUp></SignUp>
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
        element: <Restaurants></Restaurants>
      },
      {
        path: 'regions',
        element: <Regions></Regions>
      },
      {
        path: 'cities',
        element: <Cities></Cities>
      },
      {
        path: 'users',
        element: <Users></Users>
      }
    ],
  },
]);
