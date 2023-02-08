import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Categories from "../../components/ShopPageComponents/Categories/Categories";
import ProductList from "../../components/ShopPageComponents/ProductList/ProductList";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import Footer from "../../components/Footer/Footer";

import "./ShopPage.css";

const ShopPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="shop_banner">
        <h2>SHOP</h2>
        <h3>SHOP</h3>
      </div>
      <section className="shop_container">
        <Categories />
        <ProductList />
      </section>
      <ChatPopup />
      <Footer />
    </React.Fragment>
  );
};

export default ShopPage;
