import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Amiibo } from '@/types/types'

export const productsApi = createApi({
    reducerPath: "productsApi",
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.amiiboapi.com/api/",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Amiibo, null>({
            query: () => "amiibo",
        })
    }),
});

export const { useGetProductsQuery } = productsApi;