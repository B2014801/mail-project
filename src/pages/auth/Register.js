import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./Auth.module.scss";

//SHOW PASS
const cx = classNames.bind(style);
function Register() {
  const toastOptions = {
    position: "top-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    }));
  };
  const isValidUser = () => {
    let { email, password, confirmPassword } = formData;
    if (email === "") {
      toast.error("Email not empty", toastOptions);
      return false;
    }
    if (password === "") {
      toast.error("Password not empty", toastOptions);
      return false;
    }
    if (password.length < 8) {
      toast.error("Password must have 8 characters or more", toastOptions);
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Confirm Password do not match", toastOptions);
      return false;
    }
    return true;
  };
  const handleRegister = (event) => {
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
        toast.error("Email already exists", toastOptions);
      } else {
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("Registered successfully", toastOptions);
        navigate("/login");
      }
    }
  };
  return (
    <div className={cx("login-container")}>
      <form
        className={cx("login-form")}
        onSubmit={(event) => handleRegister(event)}
      >
        <h1>Register</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => handleChange(event)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event) => handleChange(event)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(event) => handleChange(event)}
          ></input>
          <button>SIGN UP</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Register;
