import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Cart from "../../components/CartPageComponents/Cart";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import Footer from "../../components/Footer/Footer";

import "./CartPage.css";

const CartPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="cartPage_banner">
        <h2>CART</h2>
        <h3>CART</h3>
      </div>
      <section>
        <Cart />
      </section>
      <ChatPopup />
      <Footer />
    </React.Fragment>
  );
};

export default CartPage;
