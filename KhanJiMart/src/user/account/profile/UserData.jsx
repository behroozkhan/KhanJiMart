import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  CurrentUserData,
  resetUserCredentials,
  ChangeCurrentUserInfo
} from "../../../redux/redux-features/auth/AuthSlice";
import { FaUserEdit } from "react-icons/fa";


const initialNameValues = {
  name:"",
};

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};




const UserData = () => {
  const [isEditingName,setIsEditingName] = useState(false);
  const [isEditingPassword,setIsEditingPassword] = useState(false);
  const { isLoading, isError, isSuccess, errorMessage, token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log('isSuccess',isSuccess,"token",token );
  // const {name,email} = user;
  // console.log(name,email);

  

  useEffect(() => {
    dispatch(CurrentUserData());
  }, [dispatch]);

  const { name = "", email = "" ,_id} = user?.data || {};
  console.log('_id',_id);
  
  const formikName = useFormik({
    initialValues:initialNameValues,
    onSubmit: async (values, { setSubmitting }) => {
      const params = {
        name: values.name,
        _id,
      };
      try {
        await dispatch(ChangeCurrentUserInfo(params)).unwrap();
        console.log('params-->',params);
        setIsEditingName(false);
      } catch (err) {
        console.error(err.message);
      } finally {
        setSubmitting(false);
        setIsEditingName(false);
      }
    },
  });

  const formikPassword = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      const params = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword,
        _id,
      };
      try {
        await dispatch(resetUserCredentials(params)).unwrap();
        console.log('params-->',params);
        setIsEditingPassword(false);
      } catch (err) {
        console.error(err.message);
      } finally {
        setSubmitting(false);
        setIsEditingPassword(false);
      }
    },
  });

  const handleEditNameClick = () => {
    setIsEditingName(true);
    formikName.setValues({
      name:"",
    });
  };


  const handleEditPasswordClick = ()=>{
    setIsEditingPassword(true);
    formikPassword.setValues({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    })
  }


  const handleSaveChanges = (e) => {
    console.log('e-->',e);
    e.preventDefault();
    
    if (isEditingName) {
      formikName.handleSubmit();
    }
    if (isEditingPassword) {
      formikPassword.handleSubmit();
    }
  };


  const handlChangeInputsData = ()=>{
    
  }
  

  // const formik = useFormik({
  //   onSubmit: async (value ) => {
  //     try {
  //       console.log("pararmsRegister", params);

  //     } catch (err) {
  //       console.error("Failed to login:", err.message);
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   },
  // });

  return (
    <div className="w-[65%] mt-20 mx-auto">
      <h2 className="ml-10 text-[var(--mainSecondaryRedish)] text-[1.300rem] font-semibold mb-6">
        Edit Your Profile
      </h2>
      <span onClick={handleEditNameClick}  className="cursor-pointer flex justify-end w-[75%] mx-auto">
        <FaUserEdit size={25}  />
        </span>
      {/* User Details input */}
      <form >
      <div className="flex gap-6 ml-10 ">
        <div className=" flex flex-col">
          <label htmlFor="" className=" font-medium">
            First Name
          </label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
            // value={name}
            value={formikName.values.name}
            onChange={formikName.handleChange}
            onBlur={formikName.handleBlur}
            disabled={!isEditingName}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className=" font-medium">
            Last Name
          </label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
          />
        </div>
      </div>

      <div className="flex gap-6 ml-10 mt-4">
        <div className=" flex flex-col">
          <label htmlFor="" className=" font-medium">
            Email
          </label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
            value={email}
            disabled
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className=" font-medium">
            Address
          </label>
          <input
            type="text"
            className="pl-4 bg-[var(--mainSecondaryLightWhite)] p-2 mt-2 outline-none appearance-none text-[var(--mainTextBlack)] w-[320px]"
          />
        </div>
      </div>

      {/* <div className="flex items-center justify-end gap-2">
          {isEditingName && (
            <>
              <Button
                sx={{
                  marginTop: "20px",
                  width: "200px",
                  alignItems: "center",
                  color: "var(--mainTextBlack)",
                  padding: "10px 20px",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "var(--mainSecondaryLightWhite)",
                    color: "var(--mainTextBlack)",
                  },
                }}
                onClick={() => setIsEditingName(false)}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  marginTop: "20px",
                  width: "200px",
                  alignItems: "center",
                  color: "var(--mainPrimaryColorWhite)",
                  padding: "10px 20px",
                  border: "1px solid var(--mainTextGrey)",
                  background: "var(--mainSecondaryRedish)",
                  "&:hover": {
                    backgroundColor: "var(--mainSecondaryLightWhite)",
                    color: "var(--mainTextBlack)",
                  },
                }}
                type="submit"
              >
                Update
              </Button>
            </>
          )}
        </div> */}

      {/* Password Changes Feild */}
      <span onClick={handleEditPasswordClick} className="cursor-pointer flex justify-end w-[75%] mx-auto mt-6">
        <FaUserEdit size={25} />
      </span>
      <div className="flex gap-6 ml-10 mt-6">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="" className=" font-medium">
            Password Changes
          </label>
          <input
            type="password"
            placeholder="Old Password"
            className="bg-[var(--mainSecondaryLightWhite)] pl-4 p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-full"
            // name={formik.values.oldPassword}
            name="oldPassword"
            value={formikPassword.values.oldPassword}
            onChange={formikPassword.handleChange}
            onBlur={formikPassword.handleBlur}
            disabled={!isEditingPassword}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            className="bg-[var(--mainSecondaryLightWhite)] pl-4 p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-full"
            name='newPassword'
            value={formikPassword.values.newPassword}
            onChange={formikPassword.handleChange}
            onBlur={formikPassword.handleBlur}
            disabled={!isEditingPassword}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Passwod"
            className="bg-[var(--mainSecondaryLightWhite)] pl-4 p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)] w-full"
            name='confirmNewPassword'
            value={formikPassword.values.confirmNewPassword}
            onChange={formikPassword.handleChange}
            onBlur={formikPassword.handleBlur}
            disabled={!isEditingPassword}
            required
          />
        </div>
      </div>

      <div className="flex  items-center justify-end gap-2">
        <Button
          sx={{
            marginTop: "20px",
            width: "200px",
            alignItems: "center",
            color: "var(--mainTextBlack)",
            padding: "10px 20px",
            border: "none",
            "&:hover": {
              backgroundColor: "var(--mainSecondaryLightWhite)",
              color: "var(--mainTextBlack)",
            },
          }}
          onClick={() => {
            setIsEditingName(false);
            setIsEditingPassword(false);
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            marginTop: "20px",
            width: "200px",
            alignItems: "center",
            color: "var(--mainPrimaryColorWhite)",
            padding: "10px 20px",
            border: "1px solid var(--mainTextGrey)",
            background: "var(--mainSecondaryRedish)",
            "&:hover": {
              backgroundColor: "var(--mainSecondaryLightWhite)",
              color: "var(--mainTextBlack)",
            },
          }}
           type="submit"
           onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </div>
      </form>
    </div>
  );
};

export default UserData;
