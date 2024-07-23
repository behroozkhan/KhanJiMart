import React, { useEffect } from "react";
import { Button } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";



const ForgotPassword = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center mt-6">
        <div className="mt-4 bg-red-400 flex flex-wrap">
          <img
            width={640}
            className="object-contain"
            src={LoginImg}
            alt="login"
          />
        </div>
        <div className="sm:items-start">
          <div className="flex flex-col justify-center sm:ml-24 ml-6 sm:mb-10">
            <div className="space-y-2">
              <h2 className="text-[var(--mainTextBlack)] text-[2rem] font-semibold">
                Forgot Password
              </h2>
              <h4 className="text-[var(--mainTextBlack)]">
                Enter Your Emails and we'll send you a link to reset your
                password
              </h4>
            </div>

            <form>
              <div className="space-y-8 mb-4 mt-8 ">
                <div className="">
                  <input
                    className="xl:w-[350px] lg:w-[350px] md:w-[350px] w-[350px]  pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 outline-none appearance-none text-[var(--mainTextBlack)]"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    size="lg"
                    required
                  />
              
                </div>
              </div>
                <Link
                  className="text-[var(--mainSecondaryRedish)]"
                  to={"/new-password"}
                >
                  <Button
                    sx={{
                      background: "var(--mainButtonRedish)",
                      width: "350px",
                      color: "var(--mainBackgroundColorWhite)",
                      "&:hover": {
                        backgroundColor: "var(--mainSecondaryLightWhite)",
                        color: "var(--mainTextBlack)",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Link>

                <Link to={'/login'}>
                <div className="w-[350px] flex items-center justify-center mt-6 space-x-2">
                <FaAngleLeft />
                <span className="text-[14px]">Back To Login</span>
                </div>

                </Link>
                    
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
