import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin-orders",
        element: <Admin />,
      }
    ],
  },
]);