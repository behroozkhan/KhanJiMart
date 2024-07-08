import { Button } from "@mui/material";
import React from "react";

const UserData = () => {
  return (
    <div className="w-[65%] mt-20 mx-auto">
      <h2 className="ml-10 text-[var(--mainSecondaryRedish)] text-[1.300rem] font-semibold mb-6">
        Edit Your Profile
      </h2>

      {/* User Details input */}
      <div className="flex gap-6 ml-10 ">
        <div className=" flex flex-col">
          <label htmlFor="" className=" font-medium">
            First Name
          </label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className=" font-medium">Last Name</label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
          />
        </div>
      </div>

      <div className="flex gap-6 ml-10 mt-4">
        <div className=" flex flex-col">
          <label htmlFor="" className=" font-medium">
            Email
          </label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className=" font-medium">Address</label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
          />
        </div>
      </div>

      {/* Password Changes Feild */}

      <div className="flex gap-6 ml-10 mt-6">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="" className=" font-medium"  >Password Changes</label>
          <input
            type="text"
            placeholder="Current Password"
            className="bg-[var(--mainSecondaryLightWhite)] pl-4 p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-full"
          />
          <input
            type="text"
            placeholder="New Password"
            className="bg-[var(--mainSecondaryLightWhite)] pl-4 p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-full"
          />
          <input
            type="text"
            placeholder="Confirm New Passwod"
            className="bg-[var(--mainSecondaryLightWhite)] pl-4 p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-full"
          />
        </div>
      </div>

      <div className="flex  items-center justify-end gap-2">
          
      <Button
        sx={{
          marginTop: "20px",
          width: "200px",
          alignItems: "center",
          color: "var(--mainTextBlack)",
          padding: "10px 20px",
          border: 'none',
          "&:hover": {
            backgroundColor: "var(--mainSecondaryLightWhite)",
            color: "var(--mainTextBlack)",
          },
        }}
      >
        Cancel
      </Button>
        <Button
        sx={{
          marginTop: "20px",
          width: "200px",
          alignItems: "center",
          color: "var(--mainPrimaryColorWhite)",
          padding: "10px 20px",
          border: "1px solid var(--mainTextGrey)",
          background: "var(--mainSecondaryRedish)",
          "&:hover": {
            backgroundColor: "var(--mainSecondaryLightWhite)",
            color: "var(--mainTextBlack)",
          },
        }}
      >
        Save Changes
      </Button>
      </div>
    </div>
  );
};

export default UserData;
