import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axiosBase';

interface LoginData {
    email: string,
    password: string
};

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data: LoginData) => ({ url: '/auth/authenticate', method: 'post', data: data })
        }),
    }),
});

export const { useLoginMutation } = loginApi;