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
      query: (name) => {
        if (name.trim() !== "") return `/name/${name}`;
        return "/all";
      },
    }),
    getByRegion: builder.query({
      query: (region) => {
        if (region === "0") return "/all";
        return `/region/${region}`;
      },
    }),
  }),
});

export const { useGetAllQuery, useGetByNameQuery, useGetByRegionQuery } =
  countriesApi;
