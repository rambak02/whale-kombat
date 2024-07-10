import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initData =
          "query_id=AAFYCeMcAAAAAFgJ4xzSwQ8I&user=%7B%22id%22%3A484641112%2C%22first_name%22%3A%22%D0%A0%D0%B0%D0%BC%D0%B0%D0%BB%22%2C%22last_name%22%3A%22%D0%91%D0%B0%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%22%2C%22username%22%3A%22rabltrabl%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720097864&hash=3c17818991ce5d3de2628092c1cff31a70bbb35002a9c6317c9cba40161237b5";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ 
    baseUrl: `/api/v1/auth`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) headers.set('Authorization', `Bearer ${localStorage.getItem("token")}`)
  
      return headers
    }, 
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    initUser: builder.mutation({
      query: (body) => ({
        url: '/jwt/create',
        method: 'POST',
        body: { initData, ...body }
      }),
      invalidatesTags: ['User']
    }),
    getUser: builder.query({
      query: () => '/users/me',
      providesTags: ['User']
    }),
  }),
});

export const { useInitUserMutation, useGetUserQuery } = userApi;