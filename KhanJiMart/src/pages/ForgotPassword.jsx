import React, { useEffect } from "react";
import { Button } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { checkingUserMailOrPhoneExist } from "../redux/redux-features/auth/AuthSlice";
import * as Yup from 'yup';

const initialValues = {
  email: "",
  phone: "",
};

// Validation schema using Yup
const validationSchema = Yup.object({
  emailOrPhone: Yup.string()
    .required("Email or phone number is required")
    .test(
      "is-email-or-phone",
      "Please provide a valid email or phone number",
      value => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    )
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, errorMessage, isSuccess, userId,params } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess && userId) {
      console.log("userId-->",userId);
      navigate(`/new-password/${userId}`);
    }
  }, [isSuccess, userId, navigate]);

  const formik = useFormik({
    initialValues: { emailOrPhone: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      let params = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(values.emailOrPhone)) {
        params = { email: values.emailOrPhone };
      } else {
        params = { phone: values.emailOrPhone };
      }
      try {
        dispatch(checkingUserMailOrPhoneExist(params));
      } catch (err) {
        console.error("Failed to check email/phone:", err.message);
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
                Forgot Password
              </h2>
              <h4 className="text-[var(--mainTextBlack)]">
                Enter Your Email or Phone and we'll send you a link to reset your
                password
              </h4>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-8 mb-4 mt-8 ">
                <div className="">
                  <input
                    className="xl:w-[350px] lg:w-[350px] md:w-[350px] w-[350px] pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 outline-none appearance-none text-[var(--mainTextBlack)]"
                    type="text"
                    placeholder="Email or Phone"
                    autoComplete="off"
                    name="emailOrPhone"
                    value={formik.values.emailOrPhone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
                    <div className="text-red-600">{formik.errors.emailOrPhone}</div>
                  ) : null}
                </div>
              </div>
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
                type="submit"
              >
                Submit
              </Button>
              {isLoading && <p>Loading...</p>}
              {isError && <p style={{ color: "red" }}>{errorMessage}</p>}
              {/* {isSuccess && <p style={{ color: "green" }}>{successMessage}</p>} */}

              <Link to={"/login"}>
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
