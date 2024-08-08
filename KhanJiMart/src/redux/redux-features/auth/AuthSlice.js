import { AuthApi } from "../../../api/AuthApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Load initial userData from localStorage
const initialUserData = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
  token: initialUserData,
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
      const response = await AuthApi.post("user/login", params);
      console.log("response-->", response);
      console.log("params-->", params);
      const token = response?.data?.message?.token;
      console.log("token-->", token);
      return token;
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
      console.log('parmas',params);
      const response = await AuthApi.post("user/register", params);
      console.log("response-- logout>", response);
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
export const logout = createAsyncThunk("user/logout", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    console.log("state-->", state);
    const token = state?.auth?.token;
    console.log("token Auth-->", token);
    if(!token){
      console.log("No Token Found");
    }
    const response = await AuthApi.logout(token);
    console.log("response-->", response);
    return response.data;
  } catch (error) {
    if (!error.response) {
      console.error("Network error:", error.message);
      throw error;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});

// Upadate Current User Info Details

export const  ChangeCurrentUserInfo = createAsyncThunk("auth/update-user",async(params,thunkApi)=>{
try {
  const state = thunkApi.getState();
  console.log('state -->',state);
  const token = state?.auth?.token;
    console.log('token--<>',token);
    if (!token) {
      throw new Error("No token found");
    }
    const response = await AuthApi.ChangeCurrentUserInfo(token,params);
    console.log('response-->',response);
    return response.data;

} catch (error) {
  
}
})

// Reset User Credentials
export const resetUserCredentials = createAsyncThunk(
  "auth/reset-password",
  async (params, thunkApi) => {
    try {
      const response = await AuthApi.post('user/reset-password',params);
      console.log('response Reset Password-->',response);
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

  export const checkingUserMailOrPhoneExist = createAsyncThunk(
    "auth/forgot-password",
    async (params, thunkApi) => {
      try {
        const response = await AuthApi.post("user/forgot-password", params);
        console.log("response Auth-->", response);
        return response.data;
      } catch (error) {
        if (!error.response) {
          throw error;
        }
        return thunkApi.rejectWithValue(error.response.data);
      }
    }
  );

// forgetting Password
export const forgettenResetPassword = createAsyncThunk(
  "auth/forgetten-reset-password",
  async (params, thunkApi) => {
    try {
      const response = await AuthApi.put(
        "user/forgetten-reset-password",
        params
      );
      console.log(response);
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



// Getting Current User Data
export const CurrentUserData = createAsyncThunk("user/current-user", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state?.auth?.token;
    console.log('token--<>',token);
    if (!token) {
      throw new Error("No token found");
    }
    const response = await AuthApi.CurrentUserDataInfo(token);
    console.log('response-->',response);
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
        // state.token = action.payload?.data?.message?.token;
        state.token = action.payload;
        localStorage.setItem("token", JSON.stringify(action.payload));
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
        console.log("Register Fulfilled Payload:", action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
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
        state.token = null;
        localStorage.removeItem("token");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload
          ? action.payload.message
          : "Logout failed.";
      })

      .addCase(checkingUserMailOrPhoneExist.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.isSuccess = false;
      })
      .addCase(checkingUserMailOrPhoneExist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userId = action.payload.data?._id;
      })
      .addCase(checkingUserMailOrPhoneExist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })
      .addCase(forgettenResetPassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.isSuccess = false;
      })
      .addCase(forgettenResetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload;
      })
      .addCase(forgettenResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })

      .addCase(CurrentUserData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.isSuccess = false;
      })
      .addCase(CurrentUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(CurrentUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })


      .addCase(resetUserCredentials.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.isSuccess = false;
      })
      .addCase(resetUserCredentials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(resetUserCredentials.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })
  },
});

export default authSlice.reducer;
