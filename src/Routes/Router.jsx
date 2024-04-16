import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ProDetails from "../component/ProDetails";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/estate.json')
        },
        {
          path: '/cart/:id',
          element: <ProDetails></ProDetails>,
          loader: ()=> fetch('/estate.json')
        }
      ]
    },
  ]);

  export default Router;