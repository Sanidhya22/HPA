import { createSlice } from '@reduxjs/toolkit';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  email: string;
  isAdmin: null | boolean;
  avatar: string;
  profileImageUrl?: string;
  isPremium: boolean | null;
  premiumStatus: 'none' | 'pending' | 'accepted' | 'declined';
  premiumSince: Date | null;
  premiumExpires: Date | null;
}

const initialState: UserState = {
  username: '',
  email: '',
  isAdmin: null,
  avatar: '',
  profileImageUrl: '',
  isPremium: null,
  premiumStatus: 'none',
  premiumSince: null,
  premiumExpires: null,
};

const setUserState: CaseReducer<UserState, PayloadAction<UserState>> = (
  state,
  action
) => ({
  ...state,
  ...action.payload,
});
const resetUserState: CaseReducer = () => ({
  ...initialState,
});
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState,
    resetUserState,
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
