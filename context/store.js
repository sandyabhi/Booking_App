import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./SavedReducer";
import userReducer from "./UserReducer";

const store = configureStore({
  reducer: {
    booking: SavedReducer,
    user: userReducer,
  },
});

export default store;
