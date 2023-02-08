import { useDispatch } from "react-redux";
import { categoryActions } from "../../../redux/reduxCateggory";

import "./Categories.css";

const Categories = () => {
  const dispatch = useDispatch();
  //hàm lấy thông tin khi người dùng click vào các danh mục tên gọi
  const getQuery = (query) => {
    dispatch(categoryActions.SWITCH_CATEGORY(query.toLowerCase()));
    // console.log(query.toLowerCase());
  };

  const clickHandler = (value) => {
    getQuery(value.target.textContent);
  };

  return (
    <div className="categories">
      <h3>CATEGORIES</h3>
      <div className="categories_container">
        <div className="categories_item">
          <h4 className="apple">APPLE</h4>
          <p onClick={clickHandler}>All</p>
        </div>

        <div className="categories_item">
          <h4 className="categories_item_title">IPHONE & MAC</h4>
          <p onClick={clickHandler}>Iphone</p>
          <p onClick={clickHandler}>Ipad</p>
          <p onClick={clickHandler}>MacBook</p>
        </div>

        <div className="categories_item">
          <h4 className="categories_item_title">WIRELESS</h4>
          <p onClick={clickHandler}>Airpod</p>
          <p onClick={clickHandler}>Watch</p>
        </div>

        <div className="categories_item">
          <h4 className="categories_item_title">OTHER</h4>
          <p onClick={clickHandler}>Mouse</p>
          <p onClick={clickHandler}>Keyboard</p>
          <p onClick={clickHandler}>Other</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
