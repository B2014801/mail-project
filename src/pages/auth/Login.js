import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import style from "./Auth.module.scss";

//SHOW PASS
const cx = classNames.bind(style);
function Login() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "top-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const remember = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };
  const handleLogin = async (event) => {
    event.preventDefault();

    if (isValidUser()) {
      let users = localStorage.getItem("users");
      if (!users) {
        users = [];
      } else {
        users = JSON.parse(users);
      }
      let user = users.filter((user) => user.email === formData.email);
      if (user.length > 0) {
        if (user[0].password === formData.password) {
          if (remember.current.checked) {
            setCookie("current_user", JSON.stringify(formData), 30);
          } else {
            sessionStorage.setItem("current_user", JSON.stringify(formData));
          }
          navigate("/");
        } else {
          toast.error("Wrong password", toastOptions);
        }
      } else {
        toast.error("Email does not exist", toastOptions);
      }
    }
  };

  const handleChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    }));
  };

  const isValidUser = () => {
    const { email, password } = formData;
    if (email.trim().length === 0 || password.trim().length === 0) {
      toast.error("Email and password is required", toastOptions);
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className={cx("login-container")}>
      <form
        className={cx("login-form")}
        onSubmit={(event) => handleLogin(event)}
      >
        <h1>Login</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => handleChange(event)}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => handleChange(event)}
          ></input>
          <div className={cx("remember")}>
            <input
              id="remember"
              type="checkbox"
              name="remember"
              ref={remember}
            ></input>
            <label for="remember">Remember?</label>
          </div>
          <button>SIGN IN</button>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Login;
