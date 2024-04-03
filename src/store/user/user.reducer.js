import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setUserError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCurrentUser, setUserError } = userSlice.actions;
export const userReducer = userSlice.reducer;
