import React, { useState } from "react";
import Button from "./Button/Button";
import { withUser } from "./withProvider";
import { Navigate } from "react-router-dom";
import Loading from "./LoadingComponets/Loading";

const Logout = ({ setUser }) => {
  const [loading, setloading] = useState(false);

  if (!setUser) {
    return <Navigate to="/Login" />;
  }

  function handlelogout() {
    setloading(true);
    localStorage.removeItem("token");

    setUser(undefined);
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <button className="mr-5 px-3 py-2 ml-2 rounded-md bg-orange-500 focus:ring-0 hidden  sm:flex" onClick={handlelogout}>Logout</button>
    </div>
  );
};

export default withUser(Logout);
