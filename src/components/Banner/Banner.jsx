import { useNavigate } from "react-router-dom";

import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  // console.log(navigate);
  //Chuyển sang trang ShopPage khi click vào btn Browse collections
  const clickHandler = () => {
    navigate("/shop");
  };

  return (
    <div className="banner">
      <div className="banner_container">
        <div className="banner_detail">
          <p>NEW INSPIRATION 2020</p>
          <h3>20% OFF ON NEW SEASON</h3>
          <button onClick={clickHandler}>Browse collections</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
