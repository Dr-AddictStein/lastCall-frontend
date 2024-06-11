import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='mx-20 rounded-lg'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
