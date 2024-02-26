import { APIBaseQuery } from '@/redux/axiosBase';
import { setToken, setUser } from '@/redux/features/user';
import { UserDataDto } from '@/redux/features/user/types';
import { IRoleResponse } from '@/redux/models';
import { createApi } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: APIBaseQuery,
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => {
                return {
                    url: "auth/authenticate",
                    method: 'POST',
                    data,
                }
            },
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
                    dispatch(setUser(data));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        getAllRoles: builder.query<IRoleResponse[], void>({
            query() {
                return {
                    url: 'roles'
                }
            },
        })
    }),
});

export const {
    useLoginUserMutation,
    useGetMeQuery,
    useGetAllRolesQuery
} = authApi;