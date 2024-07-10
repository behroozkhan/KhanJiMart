import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/AuthValidations.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/redux-features/auth/AuthSlice.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { userData, isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      username: username,
      password: password,
    };
    console.log("params Login Page-->", params);
    dispatch(login(params));
  };

  useEffect(() => {
    if (userData) {
      navigate("/"); // Redirect to home page if userData exists
    }
  }, [userData, navigate]);

 

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
            <div className="space-y-2">
              <h2 className="text-[var(--mainTextBlack)] text-[2rem] font-semibold">
                Login in to Exclusive
              </h2>
              <h4 className="text-[var(--mainTextBlack)]">
                Enter Your Details Below
              </h4>
            </div>

            <form >
              <div className="space-y-8 mb-4 mt-8 ">
                <div className="">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button
                  // sx={{
                  //   background: "var(--mainButtonRedish)",
                  //   width: "100px",
                  //   color: "var(--mainBackgroundColorWhite)",
                  // }}
                  onClick={handleSubmit}
                  // disabled={isLoading}
                >
                  Log In
                </Button>
                {isError && (
              <Typography color="error" variant="body2">
                {errorMessage}
              </Typography>
            )}
                <span className="text-[var(--mainSecondaryRedish)]">
                  Forgot Password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
