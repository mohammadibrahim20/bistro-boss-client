import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import AddItem from "../Pages/Dahsboard/AddItem/AddItem";
import AllUsers from "../Pages/Dahsboard/AllUsers/AllUsers";
import ManageItems from "../Pages/Dahsboard/ManageItems/ManageItems";
import MyCart from "../Pages/Dahsboard/MyCart/MyCart";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Oerder/Order/Order";
import Secret from "../Pages/Shared/Secret/Secret";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoutte from "./PrivateRoutte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutte>
            <Secret />
          </PrivateRoutte>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutte>
        <Dashbord />
      </PrivateRoutte>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
