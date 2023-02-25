

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CRYPTO_API_URL,
    prepareHeaders: (header) => {
      header.set("x-rapidapi-host", process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST);
      header.set("x-rapidapi-key", process.env.REACT_APP_RAPIDAPI_KEY);
      return header;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => `/coins`,
    }),
    getCoin: builder.query({
      query: (id) => `/coin/${id}`,
    }),
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timeperiod=${timeperiod}`,
    // }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery, useGetCoinQuery } = cryptoApi;