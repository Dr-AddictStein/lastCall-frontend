import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async'
  import "@fontsource/bodoni-moda"; // Defaults to weight 400
import "@fontsource/bodoni-moda/400.css"; // Specify weight
import "@fontsource/bodoni-moda/400-italic.css"; // Specify weight and style;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="rounded-lg">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
