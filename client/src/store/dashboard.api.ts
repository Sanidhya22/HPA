import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL;

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/dashboar`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getData: builder.query<any, void>({
      query: () => ({
        url: '/getdata',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDataQuery } = dashboardApi;
