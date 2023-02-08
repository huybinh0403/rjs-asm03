import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import TrendingProductsItem from "./TrendingProductsItem";
import Popup from "../Popup/Popup";

import "./TrendingProducts.css";

const API_URL =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const TrendingProducts = () => {
  //state lưu productsData trả về từ API
  const [productsData, setProductsData] = useState([]);

  //lấy dữ liệu từ redux popup
  const showPopup = useSelector((state) => state.popup.showPopup);
  const productDataClicked = useSelector((state) => state.popup.productData);
  //console.log(productDataClicked)

  useEffect(() => {
    //Hàm lấy thông tin products từ API
    const sendRequest = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      //lưu thông tin products
      setProductsData(data);
      return data;
    };
    sendRequest();
  }, []);

  return (
    <div className="trendingProducts">
      <div className="trendingProducts_container">
        <div className="trendingProducts_title">
          <h3>MADE THE HARD WAY</h3>
          <h2>TOP TRENDING PRODUCTS</h2>
        </div>

        <div className="trendingProducts_items">
          {productsData.map((item) => (
            <TrendingProductsItem
              key={item._id.$oid}
              data={{
                id: item._id.$oid,
                category: item.category,
                img1: item.img1,
                img2: item.img2,
                img3: item.img3,
                img4: item.img4,
                long_desc: item.long_desc,
                name: item.name,
                price: item.price,
                short_desc: item.short_desc,
              }}
            />
          ))}
        </div>

        {showPopup && <Popup popupData={productDataClicked} />}
      </div>
    </div>
  );
};

export default TrendingProducts;
