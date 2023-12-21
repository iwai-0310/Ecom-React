import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./contexts/AuthProvider.jsx";

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
import About from "./shopComponent/About.jsx";
import Contact from "./shopComponent/Contact.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AddNewItem from "./pages/addNewItem.jsx";

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
      { path: "/add/newItem", element: <AddNewItem /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
);
