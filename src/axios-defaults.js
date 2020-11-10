import axios from 'axios';

axios.defaults.baseURL = "https://dev.trainerhub.io";
const token = localStorage.getItem("access_token");
if (token) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
