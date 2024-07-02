import React from "react";
import { Button } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
const Login = () => {
  return (
    <div>

      <div className="flex flex-wrap items-center mt-6">
        <div className="mt-4 bg-red-400 flex flex-wrap">
          <img width={640}  className=" object-contain" src={LoginImg} alt="login" />
        </div>
       <div className="sm:items-start">
       <div className="flex flex-col justify-center sm:ml-24 ml-6 sm:mb-10">
          <div className="space-y-2">
            <h2 className="text-[var(--mainTextBlack)] text-[2rem] font-semibold">Login in to Exclusive</h2>
            <h4 className="text-[var(--mainTextBlack)]">Enter Your Details Below</h4>
          </div>

          <div className="space-y-8 mb-4 mt-8 ">
          <div className="">
            <input style={{borderBottom: '1px solid var(--mainTextGrey)'}} className="w-full outline-none border-none pb-2"  type="text" placeholder="Email or phone number" />
          </div>
          <div>
            <input style={{borderBottom: '1px solid var(--mainTextGrey)'}} className="w-full outline-none border-none pb-2" type="text" placeholder="Password" />
          </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Button  sx={{background: "var(--mainButtonRedish)", width: '100px',color: 'var(--mainBackgroundColorWhite)'}}>Log In</Button>
            <span className="text-[var(--mainSecondaryRedish)]">Forgot Password?</span>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Login;
