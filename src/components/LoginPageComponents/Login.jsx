import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { authActions } from "../../redux/reduxAuth";

import getFromStorage from "../../localStorageFunc/getFromStorage";

import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  //state lưu thông tin được nhập ở input
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  //hàm xử lý khi có thay đổi ở input
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const userArr = getFromStorage("userArr");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Validate
  const validate = () => {
    // Check email
    if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
      alert("Please input a valid Email");
      return false;
    }

    // Check password
    if (enteredPassword.trim() === "") {
      alert("Please input for Password");
      return false;
    }
    return true;
  };

  //hàm submit form
  const submitHanlder = (event) => {
    //ngăn hành vi load trang tự động
    event.preventDefault();
    // Validate dữ liệu
    const isValid = validate();
    if (isValid) {
      // tìm trong userArr những user có email và password trùng với giá trị được nhập
      let currentUserData = userArr.find(
        (user) =>
          user.email === enteredEmail && user.password === enteredPassword
      );

      if (currentUserData) {
        dispatch(
          authActions.ON_LOGIN({
            fullName: currentUserData.fullName,
            email: currentUserData.email,
            password: currentUserData.password,
            phone: currentUserData.phone,
          })
        );

        //clear-input
        setEnteredEmail("");
        setEnteredPassword("");

        //điều hướng người dùng về homepage
        navigate("/");
      } else {
        alert("Wrong Password or Account doesn't exist!");
      }
    }
  };

  return (
    <div className="logIn">
      <div className="logIn_container">
        <h2>Sign In</h2>
        <form className="logIn_form" onSubmit={submitHanlder}>
          <input
            type="email"
            placeholder="Email"
            onChange={emailChangeHandler}
            value={enteredEmail}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
          ></input>
          <button>SIGN IN</button>
        </form>
        <p>
          Create an account?{" "}
          <Link to="/register" className="logIn_link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
