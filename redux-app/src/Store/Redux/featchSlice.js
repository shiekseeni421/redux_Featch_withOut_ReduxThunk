import { createSlice } from "@reduxjs/toolkit";

export const featchAppSlice = createSlice({
  name: "featchApp",
  initialState: {
    List: [],
    loading: false,
  },
  reducers: {
    featchTheData: (state, action) => {
      state.List = action.payload;
      state.loading = true;
    },
  },
});

export const { featchTheData } = featchAppSlice.actions;

export default featchAppSlice.reducer;
