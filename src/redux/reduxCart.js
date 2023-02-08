import { createSlice } from "@reduxjs/toolkit";

import getFromStorage from "../localStorageFunc/getFromStorage";
import saveToStorage from "../localStorageFunc/saveToStorage";

const initialStateCart = {
  cartData: getFromStorage("cartData"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    ADD_CART(state, action) {
      // Kiểm tra product đã có trong giỏ hàng chưa (tìm id trùng với id của product đang được thêm)
      const productIndex = state.cartData.findIndex(
        (product) => product.id === action.payload.id
      );
      // console.log(productIndex);
      //nếu product đã có trong giỏ hàng thì cập nhật quantiy lên +1
      //nếu product chưa có trong giỏ hàng thì thêm vào cartData
      if (productIndex >= 0) {
        state.cartData[productIndex].quantity += action.payload.quantity;
      } else {
        state.cartData.push(action.payload);
      }
      //lưu dữ liệu cartData vào localStorage
      saveToStorage("cartData", state.cartData);
    },

    INCREASE_CART(state, action) {
      //tìm product trong giỏ hàng và cập nhật quantity
      const productIndex = state.cartData.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cartData[productIndex].quantity++;

      //lưu dữ liệu cartData vào localStorage
      saveToStorage("cartData", state.cartData);
    },

    DECREASE_CART(state, action) {
      const productIndex = state.cartData.findIndex(
        (product) => product.id === action.payload.id
      );

      //nếu product có quantity > 1 thì giảm bớt 1
      if (state.cartData[productIndex].quantity >= 1) {
        state.cartData[productIndex].quantity--;
      }

      //nếu product có quantity < 1 thì xóa product khỏi giỏ hàng
      if (state.cartData[productIndex].quantity === 0) {
        const updateProducts = state.cartData.filter(
          (product) => product.id !== action.payload.id
        );
        // console.log(updateProducts)
        //cập nhật lại cartData và lưu vào localStorage
        state.cartData = updateProducts;
        saveToStorage("cartData", state.cartData);
      }
    },

    DELETE_CART(state, action) {
      //lấy ra những product có id khác với id của product muốn xóa
      const updateCart = state.cartData.filter(
        (product) => product.id !== action.payload.id
      );
      //cập nhật lại cartData và lưu vào localStorage
      state.cartData = updateCart;
      saveToStorage("cartData", state.cartData);
    },

    CLEAR_CART(state) {
      state.cartData = [];
    },
  },
});

//Lấy ra các actions
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
