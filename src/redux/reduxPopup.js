import { createSlice } from "@reduxjs/toolkit";

const initialStatePopup = { productData: {}, showPopup: false };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialStatePopup,
  reducers: {
    SHOW_POPUP(state, action) {
      //lấy data của product được người dùng click
      state.productData = action.payload;
      // console.log(state.productData);
      state.showPopup = true;
    },
    HIDE_POPUP(state) {
      state.showPopup = !state.showPopup;
    },
  },
});

//Lấy ra các actions
export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
