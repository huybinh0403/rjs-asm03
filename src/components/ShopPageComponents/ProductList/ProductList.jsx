import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";

import "./ProductList.css";

const API_URL =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const ProductList = () => {
  //state lưu data trả về từ API
  const [category, setCategory] = useState([]);

  //lấy thông tin danh mục hiện tại từ redux
  const currentQuery = useSelector((state) => state.category.query);

  useEffect(() => {
    //hàm lấy thông tin product từ API
    const sendRequest = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      //lưu thông tin products
      setCategory(data);
      return data;
    };
    sendRequest();
  }, []);

  //khi query là "all" thì hiển thị tất cả sản phẩm
  //khi query !== "all" thì dựa vào các danh mục được clicked để render ra product đó
  const productItem =
    currentQuery === "all"
      ? category.map((item) => (
          <ProductItem
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
        ))
      : category.map(
          (item) =>
            currentQuery === item.category && (
              <ProductItem
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
            )
        );

  return (
    <div className="productList">
      <div className="productList_form">
        <input
          placeholder="Enter Search Here!"
          className="productList_search"
        ></input>
        <select name="sort" className="productList_sort">
          <option value="Default Sorting">Default Sorting</option>
          <option value="Price High to Low">Price High to Low</option>
          <option value="Price Low to High">Price Low to High</option>
        </select>
      </div>

      <div className="productItem">{productItem}</div>

      <div className="pageNum">
        <button>«</button>
        <span>1</span>
        <button>»</button>
      </div>
    </div>
  );
};

export default ProductList;
