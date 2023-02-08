import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/reduxCart";

import "./ProductDetail.css";

const API_URL =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const ProductDetail = () => {
  //Lấy dữ liệu được truyền xuống từ prop state của <Link>
  const location = useLocation();
  // console.log(location.state);
  const detailData = location.state;

  //state lưu dữ liệu của ảnh được hiển thị lớn nhất
  const [largeImage, setLargeImage] = useState(detailData.img1);

  //state lưu productsData trả về từ API
  const [productsData, setProductsData] = useState([]);

  //state lưu trạng thái ẩn hiện của DESCRIPTiON
  const [showDesc, setShowDesc] = useState(false);

  //state lưu thông tin Quantiy
  const [quantity, setQuantity] = useState(1);

  //định dạng lại long_desc
  const productDescription =
    detailData.long_desc.split("•") || detailData.long_desc.split("-");
  // console.log(productDescription);

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

  //lấy ra những product có cùng category với product đang được hiển thị
  const relatedProducts = productsData.filter(
    (product) =>
      product.category === detailData.category &&
      product.name !== detailData.name
  );
  // console.log(relatedProducts);

  //hàm chuyển hình ảnh khi click vào danh mục hình ảnh
  const switchImageHandler = (img) => {
    setLargeImage(img);
  };

  //khi vào detailPage của product khác thì largeImage được cập nhật lại
  useEffect(() => {
    setLargeImage(detailData.img1);
    setQuantity(1);
  }, [detailData]);

  //hàm ẩn/hiện description
  const toggleDescription = () => {
    setShowDesc(!showDesc);
  };

  //hàm cập nhật quantity
  const increaseQuantityHandler = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantityHandler = () => {
    setQuantity(quantity - 1);
  };

  const dispatch = useDispatch();
  //hàm add to cart
  const addToCartHandler = () => {
    const addedProduct = {
      id: detailData.id,
      img: detailData.img1,
      name: detailData.name,
      price: detailData.price,
      quantity: quantity,
    };
    dispatch(cartActions.ADD_CART(addedProduct));
  };

  return (
    <div className="productDetail">
      <div className="productDetail_container">
        {/* content chính của productDetail page */}
        <div className="productDetail_content">
          <div className="productDetail_img">
            <div className="smaill_img">
              <img
                src={detailData.img1}
                alt={detailData.name}
                onClick={() => {
                  switchImageHandler(detailData.img1);
                }}
              />
              <img
                src={detailData.img2}
                alt={detailData.name}
                onClick={() => {
                  switchImageHandler(detailData.img2);
                }}
              />
              <img
                src={detailData.img3}
                alt={detailData.name}
                onClick={() => {
                  switchImageHandler(detailData.img3);
                }}
              />
              <img
                src={detailData.img4}
                alt={detailData.name}
                onClick={() => {
                  switchImageHandler(detailData.img4);
                }}
              />
            </div>
            <div className="large_img">
              <img src={largeImage} alt={detailData.name} />
            </div>
          </div>

          <div className="productDetail_container_text">
            <h2>{detailData.name}</h2>
            <h3>{Intl.NumberFormat("vi-VI").format(detailData.price)} VND</h3>
            <p className="productDetail_short_desc">{detailData.short_desc}</p>
            <span className="title_category">CATEGORY:</span>
            <span className="text_catergory">{detailData.category}</span>
            <div className="productDetail_quantity">
              <button className="productDetail_btn_quantity">QUANTITY</button>
              <button
                className="productDetail_btn_action"
                onClick={decreaseQuantityHandler}
                disabled={quantity === 1}
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                className="productDetail_btn_action"
                onClick={increaseQuantityHandler}
              >
                +
              </button>
              <button
                className="productDetail_btn_cart"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phần mô tả đặc điểm nổi bật */}
      <div className="productDetail_desc">
        <button onClick={toggleDescription}>DESCRIPTION</button>
        {showDesc && (
          <div>
            <h4>PRODUCT DESCRIPTION</h4>
            <div className="productDetail_desc_content">
              {productDescription.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Phần related product */}
      <div className="related_products">
        <h4>RELATED PRODUCTS</h4>
        <div className="related_products_container">
          {relatedProducts.map((item) => (
            <div className="related_products_item" key={item._id.$oid}>
              <Link
                to={"/detail/" + item._id.$oid}
                state={{
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
              >
                <img src={item.img1} alt={item.name} />
              </Link>
              <p>{item.name}</p>
              <p className="related_products_item_price">
                {Intl.NumberFormat("vi-VI").format(item.price)} VND
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
