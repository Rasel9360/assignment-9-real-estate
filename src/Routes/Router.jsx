import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ProDetails from "../component/ProDetails";
import Login from "../Pages/Login/Login";
import Error from "../ErrorPage/Error";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/estate.json')
      },
      {
        path: '/cart/:id',
        element: <PrivateRouter><ProDetails></ProDetails></PrivateRouter>,
        loader: () => fetch('/estate.json')
      },
      {
        path: '/profile',
        element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <PrivateRouter><Blogs></Blogs></PrivateRouter>,
        loader: () => fetch('/blog.json')
      }
    ]
  },
]);

export default Router;