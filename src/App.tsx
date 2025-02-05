import React from "react";
import "./App.css";

// src/App.js
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Reader } from "./components/Reader";
import { Layout } from "./components/Layout";
import { ReaderLayout } from "./components/ReaderLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reader",
        element: <ReaderLayout />,
        children: [
          {
            path: "",
            element: <Reader />,
          },
          {
            path: "hp",
            element: <Outlet />,
            children: [
              {
                path: "chapter/:id",
                element: <>balls</>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
