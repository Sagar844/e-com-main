import React from "react";
import { Link } from "react-router-dom";
import Sidemenu from "../Sidemenu";
import { FiUsers } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { withCart, withUser } from "../withProvider";
import Logout from "../Logout";

function Navbar({ cartCount, user }) {
  return (
    <div className="bg-white py-3  justify-between  flex items-center shadow-sm text-sm  text-white ">
      <div className="">
        <Link to="/">
          <img className="ml-5 w-12" src="/Public/print-1-1.svg" alt="print" />
        </Link>
      </div>
      {user && (
        <div className="  space-x-10 ml-auto hidden sm:flex   ">
          <Link className=" text-xl space-x-2  " to="/Profile">
            <div className="flex text-center">
              <FiUsers className="mt-2 text-green-500 font-bold text-xl " />
              <div className="font-bold text-gray-500 text-xl"></div>
            </div>
          </Link>
        </div>
      )}

      {user && (
        <div className=" flex  ml-40  ">
          <Link to="CartPage">
            <BsCartCheck className="text-green-500 text-xl hover:text-orange-500 w-6 " />
          </Link>
          <span className="bg-red-500 text-white rounded-lg px-2 font-bold mr-5  py-0">
            {cartCount}
          </span>
        </div>
      )}

      {user ? (
        <Logout />
      ) : (
        <Link
          className=" text-sm  mr-5 px-3 py-2 ml-2 rounded-md bg-orange-500 focus:ring-0 hidden  cursor-pointer sm:flex"
          to="login"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default withCart(withUser(Navbar));
