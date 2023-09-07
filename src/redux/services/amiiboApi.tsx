import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Amiibo } from '@/types/types'

export const productsApi = createApi({
    reducerPath: "productsApi",
    refetchOnFocus: false, // when the window is refocused, refetch the data
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.amiiboapi.com/api/",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Amiibo, null>({
            query: () => "amiibo",
        }),
        /* getUserById: builder.query<User, { id: string }>({
            query: ({ id }) => `users/${id}`,
        }), */
    }),
});

export const { useGetProductsQuery } = productsApi;