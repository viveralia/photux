import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Photo } from "../types";

interface QueryParams {
  limit: number;
  page: number;
}

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query<Photo[], QueryParams | void>({
        query: ({ limit = 10, page = 1 }: QueryParams) => {
          return `/list?limit=${limit}&page=${page}`;
        },
      }),
    };
  },
});

export const { useFetchPhotosQuery } = apiSlice;

export default apiSlice;
