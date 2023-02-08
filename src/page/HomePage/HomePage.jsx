import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import OurCategories from "../../components/OurCategories/OurCategories";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import OtherInfo from "../../components/OtherInfo/OtherInfo";
import ChatPopup from "../../components/ChatPopup/ChatPopup";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section>
        <Banner />
        <OurCategories />
        <TrendingProducts />
        <OtherInfo />
      </section>
      <ChatPopup />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
