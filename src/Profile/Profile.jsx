import React, { useState } from "react";
import Logout from "../Logout";
import { withUser } from "../withProvider";
import { Navigate } from "react-router-dom";
import { MdSecurity } from "react-icons/md";

function Profile({ user }) {
  if (!user) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className=" p-5 bg-gray-300 flex items-center  text-sm  justify-center space-y-5">
      <div className="font-bold  text-xl bg-white rounded-md px-20 py-40 ml-10 mr-10">
        <div>
          <MdSecurity className="text-green-400 " />
          <span className="text-green-400 text-xl">Powered by Code Yogi </span>
        </div>
        <div className="">
          <div className="flex justify-end mt-5 text-white">
            <Logout></Logout>
          </div>
        </div>
        <div className=""> Name- {user.fullName}</div>
        <div className="mt-5">Email- {user.email}</div>
      </div>

      <div></div>
    </div>
  );
}
export default withUser(Profile);
