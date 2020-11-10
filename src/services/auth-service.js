import axios from "axios";

const loginRequest = (user) => {
  return axios.post("/api/accountservice/v1/admins/login", user);
};

const profileRequest = () => {
  return axios.get("/api/accountservice/v1/admins/profile");
};

export { loginRequest, profileRequest };
