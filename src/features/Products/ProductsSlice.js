import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://dummyjson.com';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products?limit=100'
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        })
    })
});

export const { 
    useGetProductsQuery,
    useGetProductQuery
} = productsApi;