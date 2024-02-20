import { APIBaseQuery } from '@/redux/axiosBase';
import { createApi } from '@reduxjs/toolkit/query/react';

export const employeesApi = createApi({
    reducerPath: 'employeesApi',
    baseQuery: APIBaseQuery,
    tagTypes: ["employee"],
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: (id) => ({ url: `user/${id}` })
        }),
        getAllEmployees: builder.query({
            query: () => ({ url: 'user/all' })
        }),
        createEmployee: builder.mutation({
            query: (data) => ({
                url: "auth/register",
                method: 'POST',
                data
            }),
            invalidatesTags: [{ type: "employee" }],
        }),
        updateEmployee: builder.mutation({
            query: ({ id, data }) => ({
                url: `user/${id}`,
                method: 'PUT',
                data
            }),
            invalidatesTags: [{ type: "employee" }],
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `user/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: "employee" }],
        }),
    }),
});

export const {
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
    useGetEmployeeQuery,
    useGetAllEmployeesQuery
} = employeesApi;