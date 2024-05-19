import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../store/dashboard.slice";
import { userReducer } from "../store/user.slice";
import { api } from "../store/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    dashboard: dashboardReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
