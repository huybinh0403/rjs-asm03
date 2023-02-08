import React from "react";

import { Link } from "react-router-dom";

import Iphone from "../../Images/product_1.png";
import Macbook from "../../Images/product_2.png";
import Ipad from "../../Images/product_3.png";
import AppleWatch from "../../Images/product_4.png";
import AirPods from "../../Images/product_5.png";

import "./OurCategories.css";

const OurCategories = () => {
  return (
    <div className="ourCategories">
      <div className="ourCategories_container">
        <div className="ourCategories_text">
          <h3>CAREFULLY CREATED COLLECTIONS</h3>
          <h2>BROWSE OUR CATEGORIES</h2>
        </div>

        <div className="ourCategories_image">
          <div className="ourCategories_image_row1">
            <Link to="/shop">
              <img src={Iphone} alt="iphone" className="iphone" />
            </Link>
            <Link to="/shop">
              <img src={Macbook} alt="macbook" className="macbook" />
            </Link>
          </div>

          <div className="ourCategories_image_row2">
            <Link to="/shop">
              <img src={Ipad} alt="ipad" className="ipad" />
            </Link>
            <Link to="/shop">
              <img src={AppleWatch} alt="applewatch" className="applewatch" />
            </Link>
            <Link to="/shop">
              <img src={AirPods} alt="airpods" className="airpods" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
