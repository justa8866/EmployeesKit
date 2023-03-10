import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RoutesList from "./routes";

const router = createBrowserRouter([
  {
    path: RoutesList.Home,
    element: <HomePage />,
  },
]);

export default router;
