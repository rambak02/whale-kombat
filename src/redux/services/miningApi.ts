import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const miningApi = createApi({
  reducerPath: "miningApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ 
    baseUrl: `/api/v1/mining`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) headers.set('Authorization', `Bearer ${localStorage.getItem("token")}`)
  
      return headers
    }, 
  }),
  tagTypes: ['Mining', 'User'],
  endpoints: (builder) => ({
    getLevelsCost: builder.query({
      query: () => '/level-cost',
      providesTags: ['Mining']
    }),
    onTap: builder.mutation({
      query: (body) => ({
        url: '/taps',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Mining', 'User']
    })
  }),
});

export const { useGetLevelsCostQuery, useOnTapMutation } = miningApi;