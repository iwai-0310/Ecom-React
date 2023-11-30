import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import { ThemeProvider } from "@material-tailwind/react";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import Home from "./pages/home/home.jsx";
import Blog from "./pages/Blog.jsx";
import Shop from "./shopComponent/shop.jsx";
import SingleProductView from "./shopComponent/SIngleProductView.jsx";
import CartPage from "./shopComponent/CartPage.jsx";
import BlogView from "./shopComponent/BlogView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id", element: <SingleProductView /> },
      { path: "/blog/:id", element: <BlogView /> },
      { path: "cart-page", element: <CartPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {" "}
    <RouterProvider router={router} />
  </ThemeProvider>
);
