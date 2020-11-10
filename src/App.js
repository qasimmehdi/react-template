import "./App.css";
import AppRouter from "./navigation/router";
import "./axios-defaults";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "./store/actions";
import { profileRequest } from "./services/auth-service";

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("access_token")) {
    console.log("getting profile");
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
  }

  return <AppRouter />;
}

export default App;
