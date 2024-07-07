import React from "react";
import { Link } from "react-router-dom";

const MyAccountLink = () => {
  return (
    <div className="mt-12 max-w-[20%]">
      <ul className="">
        <div className="">
          <h2 className=" font-medium text-[1rem] p-1">Manage My Account</h2>
          <Link className="text-[var(--maingrey2)] font-medium">
            <li className=" ml-6 mt-2">My Profile</li>
          </Link>
          <Link className="text-[var(--maingrey2)] font-medium">
            <li className=" ml-6">Addresss Book</li>
          </Link>
          <Link className="text-[var(--maingrey2)] font-medium">
            <li className=" ml-6">My Payments Options</li>
          </Link>
        </div>

        <div className="mt-3">
          <h2 className=" font-medium text-[1rem] p-1">My Orders</h2>
          <Link className="text-[var(--maingrey2)] font-medium">
            <li className=" ml-6 mt-2">My Profile</li>
          </Link>
          <Link className="text-[var(--maingrey2)] font-medium">
            <li className=" ml-6">Addresss Book</li>
          </Link>
          <Link className="text-[var(--maingrey2)] font-medium">
            <li className=" ml-6">My Payments Options</li>
          </Link>
        </div>

        <div className="mt-3">
          <h2 className=" font-medium text-[1rem] p-1">My Wishlist</h2>
        </div>
      </ul>
    </div>
  );
};

export default MyAccountLink;
