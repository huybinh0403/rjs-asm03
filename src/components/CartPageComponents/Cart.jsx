import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../redux/reduxCart";

import "./Cart.css";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartData);
  // console.log(cartList);

  //tính tổng tiền của giỏ hàng
  let totalCartAmount = 0;
  cartList.forEach((product) => {
    totalCartAmount = totalCartAmount + product.price * product.quantity;
  });
  // console.log(totalCartAmount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //tăng product trong giỏ hàng
  const increaseCartHandler = (product) => {
    dispatch(cartActions.INCREASE_CART(product));
  };
  //giảm product trong giỏ hàng
  const decreaseCartHandler = (product) => {
    dispatch(cartActions.DECREASE_CART(product));
  };
  //xóa product khỏi giỏ hàng
  const deleteCartHandler = (product) => {
    window.confirm("Are You Sure?");
    dispatch(cartActions.DELETE_CART(product));
  };

  return (
    <div className="cart">
      <h3 className="cart_title">SHOPPING CART</h3>
      <div className="cart_container">
        {/* Phần shopping cart */}
        <div className="cart_container_shoppingCart">
          <div className="cart_listcart">
            <div className="listcart_title">
              <h4>IMAGE</h4>
              <h4>PRODUCT</h4>
              <h4>PRICE</h4>
              <h4>QUANTITY</h4>
              <h4>TOTAL</h4>
              <h4>REMOVE</h4>
            </div>
            <div className="listcart_container">
              {cartList.map((item) => (
                <div key={item.id} className="listcart_item">
                  <img src={item.img} alt={item.name} />
                  <p className="listcart_item_name">{item.name}</p>
                  <p className="listcart_item_price">
                    {Intl.NumberFormat("vi-VI").format(item.price)} VND
                  </p>
                  <div className="listcart_item_quantity">
                    <button
                      onClick={() => {
                        decreaseCartHandler(item);
                      }}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        increaseCartHandler(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p className="listcart_item_price">
                    {Intl.NumberFormat("vi-VI").format(
                      item.price * item.quantity
                    )}{" "}
                    VND
                  </p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="listcart_item_icon"
                      onClick={() => {
                        deleteCartHandler(item);
                      }}
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart_button_navigate">
            <button
              className="btn_continue"
              onClick={() => {
                navigate("/shop");
              }}
            >
              🛒<span> Continue shopping</span>
            </button>
            <button
              className="btn_proceed"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              <span>Proceed to checkout </span>✔
            </button>
          </div>
        </div>

        {/* Phần cart total */}
        <div className="cart_cartTotal">
          <h3>CART TOTAL</h3>
          <div className="cart_cartTotal_subtotal">
            <p>SUBTOTAL</p>
            <p className="cart_cartTotal_subtotal_price">
              {Intl.NumberFormat("vi-VI").format(totalCartAmount)} VND
            </p>
          </div>
          <div className="cart_cartTotal_total">
            <p>TOTAL</p>
            <p className="cart_cartTotal_total_price">
              {Intl.NumberFormat("vi-VI").format(totalCartAmount)} VND
            </p>
          </div>
          <div className="cart_cartTotal_coupon">
            <input placeholder="Enter your coupon"></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
              </svg>
              <span>Apply Coupon</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
