import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error1.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import Grocery from "./components/Grocery.js";


//  lazy loading
// chunking
// on demand loading
// code splitting
//  dynamic bundling
const Grocery = lazy(() => import("./components/Grocery.js"))
const AboutUs = lazy(() => import("./components/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><AboutUs /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
