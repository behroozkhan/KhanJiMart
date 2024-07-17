import axios from 'axios';

// Setting up Base URL
export const AuthApi = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});


// Add a logout method
AuthApi.logout = (token) => {
  return AuthApi.post("users/logout", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};