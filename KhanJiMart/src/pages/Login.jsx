import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/redux-features/auth/AuthSlice";
import {LoadingButtonMui} from "../utils/button/LoadingButton";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const { userData, isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      const params = {
        email: values.email,
        password: values.password,
      };
      try {
         dispatch(login(params));
         console.log('values-->',values);
      } catch (err) {
        console.error("Failed to login:", err.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

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
                Login in to Exclusive
              </h2>
              <h4 className="text-[var(--mainTextBlack)]">
                Enter Your Details Below
              </h4>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-8 mb-4 mt-8 ">
                <div className="">
                  <input
                    style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                    className="w-full outline-none border-none pb-2"
                    type="email"
                    placeholder="Email or phone number"
                    autoComplete="off"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="lg"
                    required
                  />
                  {formik.errors.email && formik.touched.email && (
                    <Typography color="error" variant="body2">
                      {formik.errors.email}
                    </Typography>
                  )}
                </div>
                <div>
                  <input
                    style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                    className="w-full outline-none border-none pb-2"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="lg"
                    required
                  />
                  {formik.errors.password && formik.touched.password && (
                    <Typography color="error" variant="body2">
                      {formik.errors.password}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <LoadingButtonMui loading={isLoading || formik.isSubmitting} />

                <span className="text-[var(--mainSecondaryRedish)]">
                  Forgot Password?
                </span>
              </div>
              {isError && (
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontSize: "1.200rem",
                    fontWeight: "medium",
                  }}
                  color="error"
                  variant="body2"
                >
                  {errorMessage}
                </Typography>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
