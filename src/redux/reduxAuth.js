import { createSlice } from "@reduxjs/toolkit";

import saveToStorage from "../localStorageFunc/saveToStorage";
import removeFromStorage from "../localStorageFunc/removeFromStorage";

const initialStateAuth = {
  currentUser: { fullName: "", email: "", password: "", phone: "" },
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    ON_LOGIN(state, action) {
      state.currentUser = action.payload;
      // console.log(state.currentUser);
      state.isLogged = true;
      //lưu thông tin user vào localStorage
      saveToStorage("currentUser", state.currentUser);
      //lưu trạng thái đăng nhập vào localStorage để khi reload ko bị mất
      saveToStorage("isLogged", state.isLogged);
    },

    ON_LOGOUT(state) {
      state.isLogged = false;
      //xóa dữ liệu người dùng khỏi localStorage
      removeFromStorage("currentUser");
      saveToStorage("isLogged", state.isLogged);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
