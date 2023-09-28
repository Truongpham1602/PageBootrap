import axios from "axios";
import { DOMAIN } from "../util/url.constant";

const API_URL = DOMAIN + "poseidon/public/api/v1/auth";

const register = (email, password) => {
  return axios
    .post(API_URL + "/register", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (userName, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.access_token)
        );
      }
      // console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
