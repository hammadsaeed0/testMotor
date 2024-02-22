import { createSlice } from "@reduxjs/toolkit";
const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    userToken: localStorage.getItem("userToken") || null,
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    logout: (state, { payload }) => {
      localStorage.removeItem(payload);
      if (payload === "userToken") {
        state.userToken = null;
        state.user = null;
      }
    },
  },
});
export const { setUserToken, logout } = authReducer.actions;
export default authReducer.reducer;
