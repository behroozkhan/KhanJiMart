import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/redux-features/auth/AuthSlice";

const initialValues = {
  email: "",
  password: "",
};

const NewPassword = () => {
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
            <h2 className="text-[var(--mainTextBlack)] text-[2rem] font-semibold">
              Change Password
            </h2>

            <form>
              <div className="space-y-8 mb-4 mt-8 ">
                <div className="">
                  <input
                    className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[350px]"
                    type="password"
                    placeholder="New password"
                    autoComplete="off"
                    name="password"
                    size="lg"
                    required
                  />
                </div>
                <div>
                  <input
                    className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[350px]"
                    type="password"
                    placeholder="confirm-password"
                    autoComplete="off"
                    name="password"
                    size="lg"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-10">
                <Link
                  className="text-[var(--mainSecondaryRedish)]"
                  to={"/login"}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
