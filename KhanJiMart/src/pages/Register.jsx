import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import GoogleIcon from "../assets/images/Icon-Google.svg";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterLoadingButtonMui } from "../utils/button/LoadingButton";
import { register } from "../redux/redux-features/auth/AuthSlice";
import { RegisterSchema, emailRegex } from "../schemas/AuthValidations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  emailOrPhone: "",
  password: "",
};

// Function to handle form submission
const handleSubmission = async (values, setSubmitting, dispatch) => {
  const params = emailRegex.test(values.emailOrPhone)
    ? { email: values.emailOrPhone }
    : { phone: values.emailOrPhone };
  try {
    await dispatch(
      register({ ...params, name: values.name, password: values.password })
    ).unwrap();
  } catch (error) {
    console.error("Failed to login:", error.message);
  } finally {
    setSubmitting(false);
  }
};

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success("You have successfully registered.");
      navigate("/login");
    }
    if (isError) {
      toast.error(errorMessage || "Registration failed.");
    }
  }, [isSuccess, isError, errorMessage, navigate]);

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await handleSubmission(values, setSubmitting, dispatch);
        console.log("values-->", values);
      } catch (err) {
        console.error("Failed to login:", err.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <div className="flex flex-wrap items-center mt-6">
        <div className="mt-4 bg-red-400 flex flex-wrap">
          <img
            width={640}
            className=" object-contain"
            src={LoginImg}
            alt="login"
          />
        </div>
        <form onSubmit={formik.handleSubmit} className="sm:items-start">
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
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.name && formik.touched.name && (
                  <Typography
                    sx={{ marginTop: "0.200rem" }}
                    color="error"
                    variant="body2"
                  >
                    {formik.errors.name}*
                  </Typography>
                )}
              </div>
              <div className="">
                <input
                  style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                  className="w-full outline-none border-none pb-2"
                  type="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="Email or phone number"
                  value={formik.values.emailOrPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.emailOrPhone && formik.touched.emailOrPhone && (
                  <Typography
                    sx={{ marginTop: "0.200rem" }}
                    color="error"
                    variant="body2"
                  >
                    {formik.errors.emailOrPhone}*
                  </Typography>
                )}
              </div>
              <div>
                <input
                  style={{ borderBottom: "1px solid var(--mainTextGrey)" }}
                  className="w-full outline-none border-none pb-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.password && formik.touched.password && (
                  <Typography
                    sx={{ marginTop: "0.200rem" }}
                    color="error"
                    variant="body2"
                  >
                    {formik.errors.password}*
                  </Typography>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="">
                <RegisterLoadingButtonMui
                  sx={{
                    background: "var(--mainButtonRedish)",
                    width: "100%",
                    color: "var(--mainBackgroundColorWhite)",
                    "&:hover": {
                      backgroundColor: "var(--mainSecondaryLightWhite)",
                      color: "var(--mainTextBlack)",
                    },
                  }}
                >
                  Create Account
                </RegisterLoadingButtonMui>
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
          <div className="w-[300px] flex items-center mt-6 space-x-2">
          <p className="text-[14px]">
            Already have an account ? 
            <Link className="text-blue-800 font-medium" to={"/login"}>
              {" "}Sign In
            </Link>
          </p>
        </div>
          </div>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Register;
