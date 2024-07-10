
import { LoginApi } from "../../../api/LoginApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Load initial userData from localStorage
const initialUserData = JSON.parse(localStorage.getItem("userData")) || null;

const initialState = {
  userData: initialUserData, // Initialize with data from localStorage if available
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const login = createAsyncThunk("auth/login", async (params, thunkApi) => {
  try {
    const response = await LoginApi.post("auth/login", params);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
        localStorage.setItem("userData", JSON.stringify(action.payload)); // Update localStorage on successful login
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload ? action.payload.message : "Login failed.";
      });
  },
});

export default authSlice.reducer;