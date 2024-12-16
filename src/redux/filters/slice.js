import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filterValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
