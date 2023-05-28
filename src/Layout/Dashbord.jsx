import {
  FaCalendarAlt,
  FaFolderOpen,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#d1a054] text-base-content space-y-3">
          <li>
            <NavLink to="dashboard">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt />
              Reservation
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> My Cart
            </NavLink>
          </li>
          <li>
  
            <NavLink to="/menu">
             
              <FaHamburger />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
            
              <FaFolderOpen /> Order Food
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
