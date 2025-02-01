import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => "/all",
    }),
    getByName: builder.query({
      query: (name) => `/character?name=${name}`,
    }),
  }),
});

export const { useGetAllQuery, useGetByNameQuery } = countriesApi;
