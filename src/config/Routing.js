import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, Home, About, Skills, Work, Contact } from "../Screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Side Menu
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
