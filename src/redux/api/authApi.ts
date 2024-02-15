import { createApi } from '@reduxjs/toolkit/query/react';
import { APIBaseQuery } from '../axiosBase';
import { setAuthState } from '../features/authSlice';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: APIBaseQuery,
    tagTypes: ['AuthApi'],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: `auth/authenticate`,
                method: 'POST',
                data,
            }),
            async onQueryStarted({ dispatch, queryFulfilled }) {
                const {data} = await queryFulfilled; 
                console.log(data);
                dispatch(setAuthState(data)); 
            },
        }),
        getProfile: builder.query<any, void>({
            query: () => ({ url: `users/profile` }),
            providesTags: ['AuthApi']
        }),
    }),
});

export const {
    useLoginUserMutation,
    useGetProfileQuery
} = authApi