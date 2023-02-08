import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import ProductDetail from "../../components/DetailPageComponents/ProductDetail";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import Footer from "../../components/Footer/Footer";

const DetailPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section>
        <ProductDetail />
      </section>
      <ChatPopup />
      <Footer />
    </React.Fragment>
  );
};

export default DetailPage;
