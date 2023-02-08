import { createSlice } from "@reduxjs/toolkit";

const initialStateCategory = { query: "all" };

const categorySlice = createSlice({
  name: "category",
  initialState: initialStateCategory,
  reducers: {
    SWITCH_CATEGORY(state, action) {
      state.query = action.payload;
      // console.log(state.query);
    },
  },
});

//Lấy ra các actions
export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
