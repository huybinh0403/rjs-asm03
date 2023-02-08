import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/reduxAuth";
import getFromStorage from "../../localStorageFunc/getFromStorage";

import "./NavBar.css";

const NavBar = () => {
  // const isLogged = useSelector((state) => state.auth.isLogged);
  // const isLogged = getFromStorage("isLogged");
  const isLogged = JSON.parse(localStorage.getItem("isLogged"));
  // console.log(isLogged);

  //lấy thông tin currentUser từ localStorage
  const currentUser = getFromStorage("currentUser");
  // console.log(currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Hàm logout
  const logoutHandler = () => {
    dispatch(authActions.ON_LOGOUT());

    //sau khi logout điều hướng người dùng về Login page
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_link_page">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
          >
            Shop
          </NavLink>
        </div>

        <div className="navbar_title">
          <h2>BOUTIQUE</h2>
        </div>

        <div className="navbar_link_icon">
          <div>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="navbar_icon"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <span>Cart</span>
            </NavLink>
          </div>
          <div>
            {/*có người dùng đang đăng nhập thì hiện fullName và logout btn, ngược lại thì hiện login*/}
            {isLogged ? (
              <div className="navbar_logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="navbar_icon"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                {currentUser.fullName}
                <button onClick={logoutHandler}>(Logout)</button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="navbar_icon"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span>Login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
