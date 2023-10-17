import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Authentication/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'menu',
            element:<Menu/>
        },
        {
            path:'order/:category',
            element:<Order/>
        },
        {
            path:'login',
            element:<Login/>
        },
      ],
    },
  ]);

