import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/auth`,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<any, any>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    signout: builder.mutation<any, void>({
      query: () => ({
        url: '/signout',
        method: 'POST',
      }),
    }),
    googleSignup: builder.mutation<any, any>({
      query: (credentials) => ({
        url: '/google/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    googleSignin: builder.mutation<any, any>({
      query: (credentials) => ({
        url: '/google/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useSigninMutation,
  useSignoutMutation,
  useGoogleSignupMutation,
  useGoogleSigninMutation,
} = authApi;
