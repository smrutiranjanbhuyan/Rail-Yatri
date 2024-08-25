import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Header } from "../layouts";
import {LandingPage} from '../pages'
import { Children } from "react";
const routes = [
  {
    path: "/",
    element: <App/>,
    children:[{
      path:"",
      element:<LandingPage/>
    }]
  },
];

const router = createBrowserRouter(routes);

export default router;
