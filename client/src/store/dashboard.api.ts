import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8181/api/dashboard",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getData: builder.query<any, void>({
      query: () => ({
        url: "/getdata",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDataQuery } = dashboardApi;
