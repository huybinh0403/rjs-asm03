import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Checkout from "../../components/CheckoutPageComponents/Checkout";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import Footer from "../../components/Footer/Footer";

import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="checkoutPage_banner">
        <h2>CHECKOUT</h2>
        <div className="checkoutPage_link">
          <h3>HOME / </h3>
          <h3>CART / </h3>
          <h3 className="checkoutPage_checkout">CHECKOUT</h3>
        </div>
      </div>
      <section>
        <Checkout />
      </section>
      <ChatPopup />
      <Footer />
    </React.Fragment>
  );
};

export default CheckoutPage;
