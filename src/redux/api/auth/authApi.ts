import { createApi } from '@reduxjs/toolkit/query/react';
import { APIBaseQuery } from '../../axiosBase';
import { setToken, setUser } from '../../features/user';
import { UserDataDto } from '../../features/user/types';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: APIBaseQuery,
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: "auth/authenticate",
                method: 'POST',
                data,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setToken(data));
                    dispatch(authApi.endpoints.getMe.initiate(null, { forceRefetch: true }))
                } catch (err) {
                    console.log('loginUser err');
                }
            },
        }),
        getMe: builder.query<UserDataDto | any, null>({
            query: () => ({ url: "auth/profile" }),
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(setUser(data));
                    dispatch(setUser(data));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const {
    useLoginUserMutation,
    useGetMeQuery
} = authApi;