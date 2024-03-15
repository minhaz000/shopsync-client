import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import User from "../../typeDef/user";
export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    getReport: build.query<User, number>({
      query: (id) => ({ url: `users/${id}` }),
    }),
  }),
});

export const { useGetReportQuery } = reportApi;
