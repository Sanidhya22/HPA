import { createSlice } from "@reduxjs/toolkit";
import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  email: string;
  isAdmin: null | boolean;
}

const initialState: UserState = {
  username: "",
  email: "",
  isAdmin: null,
};

const setUserState: CaseReducer<UserState, PayloadAction<UserState>> = (
  state,
  action
) => ({
  ...state,
  ...action.payload,
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState,
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
