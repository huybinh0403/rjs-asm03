import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/reduxCart";

import getFromStorage from "../../localStorageFunc/getFromStorage";
import removeFromStorage from "../../localStorageFunc/removeFromStorage";

import "./Checkout.css";

const Checkout = () => {
  //state lưu thông tin được nhập ở input
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  //hàm xử lý khi có thay đổi ở input
  const fullNameChangeHandler = (event) => {
    setEnteredFullName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //lấy thông tin cart đã được lưu ở localStorage
  const cartList = getFromStorage("cartData");
  // console.log(cartList);

  //tính tổng tiền của giỏ hàng
  let totalCartAmount = 0;
  cartList.forEach((product) => {
    totalCartAmount = totalCartAmount + product.price * product.quantity;
  });

  //Validate
  const validate = (data) => {
    //check fullname input
    if (data.fullName === "") {
      alert("Please input for FullName");
      return false;
    }

    //check Email input
    if (data.email === "" && !data.email.includes("@")) {
      alert("Please input a valid Email");
      return false;
    }

    //check phone input
    if (data.phone === "") {
      alert("Please input for Phone Number");
      return false;
    }

    //check address
    if (data.address === "") {
      alert("Please input for Address");
      return false;
    }

    return true;
  };

  //hàm submit form
  const submitHanlder = (event) => {
    //ngăn hành vi load trang tự động
    event.preventDefault();

    let orderData = {
      fullName: enteredFullName,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
    };

    const isValid = validate(orderData);
    if (isValid) {
      //hiện thông báo đặt hàng thành công cho người dùng
      alert("Order Success! ");
      //xóa dữ liệu giỏ hàng
      removeFromStorage("cartData");
      dispatch(cartActions.CLEAR_CART());

      //clear input
      setEnteredFullName("");
      setEnteredEmail("");
      setEnteredPhone("");
      setEnteredAddress("");

      //điều hướng người dùng về homepage
      navigate("/");
    }
  };

  return (
    <div className="checkout">
      <h3 className="checkout_title">BILLING DETAILS</h3>
      <div className="checkout_container">
        {/* Phần form input */}
        <div className="checkout_form">
          <form onSubmit={submitHanlder}>
            <div className="checkout_formInput">
              <label htmlFor="fullName">FULL NAME:</label>
              <input
                type="text"
                placeholder="Enter Your Full Name Here!"
                onChange={fullNameChangeHandler}
                value={enteredFullName}
              ></input>
            </div>
            <div className="checkout_formInput">
              <label htmlFor="email">EMAIL:</label>
              <input
                type="email"
                placeholder="Enter Your EMAIL Here!"
                onChange={emailChangeHandler}
                value={enteredEmail}
              ></input>
            </div>
            <div className="checkout_formInput">
              <label htmlFor="phone">PHONE NUMBER:</label>
              <input
                type="text"
                placeholder="Enter Your Phone Number Here!"
                onChange={phoneChangeHandler}
                value={enteredPhone}
              ></input>
            </div>
            <div className="checkout_formInput">
              <label htmlFor="address">ADDRESS:</label>
              <input
                type="text"
                placeholder="Enter Your Address Here!"
                onChange={addressChangeHandler}
                value={enteredAddress}
              ></input>
            </div>

            <button className="btn_order">Place order</button>
          </form>
        </div>

        {/* Phần YOUR ORDER */}
        <div className="checkout_yourOrder">
          <h3>YOUR ORDER</h3>
          <div className="yourOrder_cartList">
            {cartList.map((item) => (
              <div key={item.id} className="yourOrder_cartItem">
                <h4>{item.name}</h4>
                <div className="yourOrder_cartItem_detail">
                  <p>{Intl.NumberFormat("vi-VI").format(item.price)} VND</p>
                  <p>x</p>
                  <p>{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="yourOrder_total">
            <p>TOTAL</p>
            <p className="yourOrder_total_price">
              {Intl.NumberFormat("vi-VI").format(totalCartAmount)} VND
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
