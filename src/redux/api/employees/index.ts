import { APIBaseQuery } from '@/redux/axiosBase';
import { createApi } from '@reduxjs/toolkit/query/react';

export const employeesApi = createApi({
    reducerPath: 'employeesApi',
    baseQuery: APIBaseQuery,
    tagTypes: ['POST_EMPLOYEE', "UPDATE_EMPLOYEE", "UPDATE_EMPLOYEE"],
    endpoints: (builder) => ({
        createEmployee: builder.mutation({
            query: (data) => ({
                url: "auth/register",
                method: 'POST',
                data
            }),
            invalidatesTags: ["POST_EMPLOYEE"]
        }),
        updateEmployee: builder.mutation({
            query: (data) => ({
                url: "auth/register",
                method: 'PUT',
                data
            }),
            invalidatesTags: ["UPDATE_EMPLOYEE"]
        }),
        deleteEmployee: builder.mutation({
            query: (data) => ({
                url: "auth/register",
                method: 'PUT',
                data
            }),
            invalidatesTags: ["UPDATE_EMPLOYEE"]
        }),
    }),
});

export const {
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation
} = employeesApi;