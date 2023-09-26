import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8089/api/auth"

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { usernameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveUserIntoSession = (usename) => {
  sessionStorage.setItem("authenticatedUser", usename);
}

export const checkUserLoggedIn = () => {
  const usernameSess = sessionStorage.getItem("authenticatedUser");
  if (usernameSess == null) {
    return false;
  } else {
    return true;
  }
}

export const getUserFromSession = () => {
  const usernameSession = sessionStorage.getItem("authenticatedUser");
  return usernameSession;
}

export const logout = () => {
  localStorage.clear()
  sessionStorage.clear();
}