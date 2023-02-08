import { Link } from "react-router-dom";

import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="productItem_container">
      <Link to={"/detail/" + props.data.id} state={props.data}>
        <img
          src={props.data.img1}
          alt={props.data.name}
          className="productItem_img"
        />
      </Link>
      <p>{props.data.name}</p>
      <p className="productItem_price">
        {Intl.NumberFormat("vi-VI").format(props.data.price)} VND
      </p>
    </div>
  );
};

export default ProductItem;
