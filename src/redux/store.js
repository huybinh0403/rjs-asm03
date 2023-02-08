import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./reduxPopup";
import categoryReducer from "./reduxCateggory";
import authReducer from "./reduxAuth";
import cartReducer from "./reduxCart";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    category: categoryReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
