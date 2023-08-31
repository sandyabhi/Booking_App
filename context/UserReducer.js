import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { email: "" },
  reducers: {
    setUser: (state, action) => {
      //   state.uuid = action.payload.uuid;
      //   state.name = action.payload.name;
      state.email = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
