import React from "react";
import { Button } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import GoogleIcon from "../assets/images/Icon-Google.svg";
const Register = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center mt-6">
        <div className="mt-4 bg-red-400 flex flex-wrap">
          <img
            width={640}
            className=" object-contain"
            src={LoginImg}
            alt="login"
          />
        </div>
        <div className="sm:items-start">
          <div className="flex flex-col justify-center sm:ml-24 ml-6 sm:mb-10">
            <div className="mt-4">
              <h2 className="text-[var(--mainTextBlack)] text-[2rem] font-semibold">
                Create an account
              </h2>
              <h4 className="text-[var(--mainTextBlack)] mt-2">
                Enter your details below
              </h4>
            </div>

            <div className="space-y-8 mb-4 mt-8 ">
              <div className="">
                <input
                  style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                  className="w-full outline-none border-none pb-2"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="">
                <input
                  style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                  className="w-full outline-none border-none pb-2"
                  type="text"
                  placeholder="Email or phone number"
                />
              </div>
              <div>
                <input
                  style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                  className="w-full outline-none border-none pb-2"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="">
                <Button
                  sx={{
                    background: "var(--mainButtonRedish)",
                    width: "100%",
                    color: "var(--mainBackgroundColorWhite)",
                  }}
                >
                  Create Account
                </Button>
              </div>
              <div className="">
                <Button
                  sx={{
                    background: "var(--mainBackgroundColorWhite)",
                    width: "100%",
                    color: "var(--mainTextBlack)",
                    border: "1px solid var(--mainTextGrey)",
                  }}
                >
                  <img className="mr-2" src={GoogleIcon} alt="" />
                  Sign Up With Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
