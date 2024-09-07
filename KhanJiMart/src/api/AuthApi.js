import axios from 'axios';

// Setting up Base URL
export const AuthApi = axios.create({
  baseURL: 'http://localhost:8800/api',
});


// Add a logout method
AuthApi.logout = (token) => {
  console.log('token11-->',token);
  return AuthApi.post("user/logout", null, {
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
  });
};


// Method for fetching current user data using token
AuthApi.CurrentUserDataInfo = (token) => {
  console.log('Fetching user data with token:', token);
  return AuthApi.get("user/current-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



// Method for fetching current user data using token
AuthApi.ChangeCurrentUserInfo = (token) => {
  console.log('Fetching user data with token:', token);
  return AuthApi.put("user/update-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


