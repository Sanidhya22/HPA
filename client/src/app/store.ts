import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../store/dashboard.slice";
import { userReducer } from "../store/user.slice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
