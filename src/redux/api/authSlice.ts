import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import User from "../../typeDef/user";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    getUser: build.query<User, number>({
      query: (id) => ({ url: `users/${id}` }),
    }),
  }),
});

export const { useGetUserQuery } = authApi;
