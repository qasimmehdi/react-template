/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { regexes } from "../../../shared/regexes";
import {
  loginRequest,
  profileRequest,
} from "../../../../services/auth-service";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../../../../store/actions";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  function validateForm() {
    return regexes.email.test(email) && true;
  }

  function handleSubmit(event) {
    loginRequest({ email: email, password: password })
      .then((resp) => {
        localStorage.setItem("access_token", resp.data.access_token);

        if (resp.data.access_token) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${resp.data.access_token}`;
        }

        profileRequest()
          .then((res) => {
            dispatch({
              type: LOG_IN,
              payload: {
                myProfile: res.data,
              },
            });
          })
          .catch((err) => console.log(err));

        history.replace("");
      })
      .catch((err) => console.log(err));
    event.preventDefault();
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
