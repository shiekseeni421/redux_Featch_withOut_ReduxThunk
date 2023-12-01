import { configureStore } from "@reduxjs/toolkit";
import featchAppSlice from "./Redux/featchSlice";

export default configureStore({
  reducer: {
    featchApp: featchAppSlice,
  },
});
