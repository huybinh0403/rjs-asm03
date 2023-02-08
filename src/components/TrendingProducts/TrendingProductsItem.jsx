import { useDispatch } from "react-redux";
import { popupActions } from "../../redux/reduxPopup";

import "./TrendingProductsItem.css";

const TrendingProductsItem = (props) => {
  const dispatch = useDispatch();
  //hàm hiện popup
  const showPopupHandler = () => {
    dispatch(popupActions.SHOW_POPUP(props.data)); //lấy data của product được người dùng click
  };

  return (
    <div className="trendingProductsItem" onClick={showPopupHandler}>
      <img
        src={props.data.img1}
        alt={props.data.name}
        className="trendingProductsItem_img"
      />
      <p>{props.data.name}</p>
      <p className="trendingProductsItem_price">
        {Intl.NumberFormat("vi-VI").format(props.data.price)} VND
      </p>
    </div>
  );
};

export default TrendingProductsItem;
