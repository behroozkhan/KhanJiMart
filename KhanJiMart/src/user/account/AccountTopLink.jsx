import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountTopLink = () => {
  const { user } = useSelector((state) => state.auth);
  const userName = user?.data?.name || "User";

  

  return (
    <div>
      <div className="mt-10 flex justify-between">

        <div className="space-x-2 text-[var(--mainTextGrey)]">
          <Link to={"/home"}>Home</Link>
          <span className="space-x-2">/</span>
          <Link to={"/cart"}>My Account</Link>
        </div>

        <div className="flex gap-1">
            <h3>Welcome!</h3>
            {/* <h4>{user?.message?.user?.name}</h4> */}
            <h4>{userName}</h4>
        </div>

      </div>
    </div>
  );
};

export default AccountTopLink;
