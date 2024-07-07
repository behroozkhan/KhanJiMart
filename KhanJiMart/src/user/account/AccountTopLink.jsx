import React from "react";
import { Link } from "react-router-dom";

const AccountTopLink = () => {
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
            <h4>Behrooz Khan</h4>
        </div>

      </div>
    </div>
  );
};

export default AccountTopLink;
