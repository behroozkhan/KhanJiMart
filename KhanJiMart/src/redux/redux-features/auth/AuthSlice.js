import { AuthApi } from "../../../api/AuthApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Load initial userData from localStorage
const initialUserData = JSON.parse(localStorage.getItem("userData")) || null;

const initialState = {
  userData: initialUserData,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

// Login Handle
export const login = createAsyncThunk(
  "users/login",
  async (params, thunkApi) => {
    try {
      const response = await AuthApi.post("users/login", params);
      console.log("response-->", response);
      console.log("params-->", params);
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.error("Network error:", error.message);
        throw error;
      }
      console.error("HTTP error:", error.response.data);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

// Register Handle
export const register = createAsyncThunk(
  "users/register",
  async (params, thunkApi) => {
    try {
      const response = await AuthApi.post("users/register", params);
      console.log("response-->", response);
      console.log("params-->", params);
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.error("Network error:", error.message);
        throw error;
      }

      console.error("HTTP error:", error.response.data);
      return thunkApi.rejectWithValue(error.response.data); 
    }
  }
);

// Logout Current User Handle
export const logout = createAsyncThunk("users/logout", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.userData?.message?.token;
    console.log("token-->", token);
    const response = await AuthApi.logout(token);
    return response.data;
  } catch (error) {
    if (!error.response) {
      console.error("Network error:", error.message);
      throw error;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.userData = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
        localStorage.setItem("userData", JSON.stringify(action.payload)); 
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Login failed.";
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
        localStorage.setItem("userData", JSON.stringify(action.payload)); 
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Registration failed.";
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.userData = null;
        localStorage.removeItem("userData");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Logout failed.";
      });
  },
});

export default authSlice.reducer;
