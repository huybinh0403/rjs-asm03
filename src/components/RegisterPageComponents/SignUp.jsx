import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import getFromStorage from "../../localStorageFunc/getFromStorage";
import saveToStorage from "../../localStorageFunc/saveToStorage";

import "./SignUp.css";

const SignUp = () => {
  //state lưu thông tin được nhập ở input
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  //hàm xử lý khi có thay đổi ở input
  const fullNameChangeHandler = (event) => {
    setEnteredFullName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const userArr = getFromStorage("userArr");
  // console.log(userArr);

  const navigate = useNavigate();

  //lấy dữ liệu từ input
  let userData = {
    fullName: enteredFullName,
    email: enteredEmail,
    password: enteredPassword,
    phone: enteredPhone,
  };

  //Validate
  const validate = (data) => {
    //check fullname input
    if (data.fullName.trim() === "") {
      alert("Please input for FullName");
      return false;
    }

    //check Email input
    if (data.email.trim() === "" && !data.email.includes("@")) {
      alert("Please input a valid Email");
      return false;
    }

    for (let i = 0; i < userArr.length; i++) {
      if (data.email === userArr[i].email) {
        alert(`${data.email} had been used`);
        return false;
      }
    }

    //check password input
    if (data.password.trim() === "" || data.password.trim().length < 8) {
      alert(
        "Your Password is weak! Please use a password of 8 characters or more"
      );
      return false;
    }

    //check phone input
    if (data.phone.trim() === "") {
      alert("Please input for Phone");
      return false;
    }

    return true;
  };

  //hàm submit form
  const submitHanlder = (event) => {
    //ngăn hành vi load trang tự động
    event.preventDefault();
    // Validate dữ liệu
    const isValid = validate(userData);
    if (isValid) {
      //thêm dữ liệu vào userArr
      userArr.push(userData);
      //lưu vào localStorage
      saveToStorage("userArr", userArr);

      //clear-input
      setEnteredFullName("");
      setEnteredEmail("");
      setEnteredPassword("");
      setEnteredPhone("");

      //điều hướng người dùng sang trang login
      navigate("/login");
    }
  };

  return (
    <div className="signUp">
      <div className="signUp_container">
        <h2>Sign Up</h2>
        <form className="signUp_form" onSubmit={submitHanlder}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={fullNameChangeHandler}
            value={enteredFullName}
          ></input>
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
          <input
            type="text"
            placeholder="Phone"
            onChange={phoneChangeHandler}
            value={enteredPhone}
          ></input>
          <button>SIGN UP</button>
        </form>
        <p>
          Login?{" "}
          <Link to="/login" className="signUp_link">
            Click
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
