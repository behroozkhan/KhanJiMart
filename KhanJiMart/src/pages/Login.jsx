import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/redux-features/auth/AuthSlice";
import { LoadingButtonMui } from "../utils/button/LoadingButton";
import { LoginSchema, emailRegex } from "../schemas/AuthValidations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAngleLeft } from "react-icons/fa6";


const userDetails = localStorage.getItem("user");
const parsedUserDetails = JSON.parse(userDetails)

const initialValues = {
  emailOrPhone: parsedUserDetails ? parsedUserDetails.emailOrPhone : "",
  password: parsedUserDetails ? parsedUserDetails.password : "",
};


// Function to handle form submission
const handleSubmission = async (values, setSubmitting, dispatch) => {
  const params = emailRegex.test(values.emailOrPhone)
    ? { email: values.emailOrPhone }
    : { phone: values.emailOrPhone };

  try {
    await dispatch(login({ ...params, password: values.password })).unwrap();
  } catch (error) {
    console.error("Failed to login:", error.message);
  } finally {
    setSubmitting(false);
  }
};

const Login = () => {
  const dispatch = useDispatch();
  const { token, isLoading, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();



  useEffect(() => {
    if (token) {
      toast.success('You have successfully logged in.');
      navigate("/");
    }
    if (isError) {
      toast.error(errorMessage || "Login failed.");
    }
  }, [isSuccess, token, navigate]);

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: LoginSchema,
  //   onSubmit: async (values,{ setSubmitting }) => {
  //     const params = {
  //       email: values.email,
  //       password: values.password,
  //     };
  //     try {

  //       console.log("values-->", values);
  //       dispatch(login(params));
  //     } catch (err) {
  //       console.error("Failed to login:", err.message);
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   },
  // });

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: phoneOrEmailVal.concat(Yup.object({
  //     password: Yup.string().required("Password is required"),
  //   })),
  //   onSubmit: async (values, { setSubmitting }) => {
  //     const params = emailRegex.test(values.emailOrPhone)
  //       ? { email: values.emailOrPhone }
  //       : { phone: values.emailOrPhone };
  //       // const data = { ...params, password: values.password };

  //     try {
  //       dispatch(login({ ...params, password: values.password }));
  //     } catch (err) {
  //       console.error("Failed to login:", err.message);
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   },
  // });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      await handleSubmission(values, setSubmitting, dispatch);
    },
  });
console.log("parsed", parsedUserDetails);


  return (
    <div>
      <div className=" absolute right-10 w-[25%] animate-popup">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </div>
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
                    type="emailOrPhone"
                    placeholder="Email or phone number"
                    autoComplete="off"
                    name="emailOrPhone"
                    value={formik.values.emailOrPhone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="lg"
                    required
                  />
                  {formik.errors.emailOrPhone && formik.touched.emailOrPhone && (
                    <Typography color="error" variant="body2">
                      {formik.errors.emailOrPhone}
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
                <Link
                  className="text-[var(--mainSecondaryRedish)]"
                  to={"/forgot-password"}
                >
                  Forgot Password?
                </Link>
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
          <div>
            <div className="w-[400px] flex items-center justify-center mt-6 space-x-2">
              <p className="text-[14px]">Dont have an account ? <Link className="text-blue-800 font-medium" to={"/register"}>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
