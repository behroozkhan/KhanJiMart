import React from "react";
import { Button } from "@mui/material";
import LoginImg from "../assets/images/LoginSignupSideImg.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { forgettenResetPassword } from "../redux/redux-features/auth/AuthSlice";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const { isLoading, isError, errorMessage, isSuccess, successMessage } =
    useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      const params = {
        userId,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      try {
        console.log("params-->", params);
        await dispatch(forgettenResetPassword(params)).unwrap();
        console.log("values-->", values);
        navigate("/login");
      } catch (error) {
        console.log("Reset password Failed:", error);
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
            <h2 className="text-[var(--mainTextBlack)] text-[2rem] font-semibold">
              Change Password
            </h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-8 mb-4 mt-8 ">
                <div className="">
                  <input
                    className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[350px]"
                    type="password"
                    placeholder="password"
                    autoComplete="off"
                    name="password"
                    size="lg"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </div>

                <div className="">
                  <input
                    className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[350px]"
                    type="password"
                    placeholder="New password"
                    autoComplete="off"
                    name="confirmPassword"
                    size="lg"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-10">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
  