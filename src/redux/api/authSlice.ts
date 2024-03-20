import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import User from "../../typeDef/user";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_URL}/auth` }),
  tagTypes: ["getCurrentUser"],
  endpoints: (build) => ({
    //____________________ QUERY
    getCurrentUser: build.query<User, number>({
      query: (id) => ({ url: `/profile` }),
      providesTags: ["getCurrentUser"],
    }),

    //___________________ MUTATION
    logInByGoogle: build.mutation<string, string>({
      query: (token) => ({
        url: "/google",
        method: "POST",
        body: { token: token },
      }),
      invalidatesTags: ["getCurrentUser"],
    }),
  }),
});

export const { useGetCurrentUserQuery, useLogInByGoogleMutation } = authApi;
