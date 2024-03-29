import { APIBaseQuery } from '@/redux/axiosBase';
import { IEmployeeResponse } from '@/redux/models';
import { createApi } from '@reduxjs/toolkit/query/react';

export const employeesApi = createApi({
    reducerPath: 'employeesApi',
    baseQuery: APIBaseQuery,
    tagTypes: ["Employees"],
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query(id) {
                return {
                    url: `user/${id}`
                }
            },
            providesTags: ["Employees"]
        }),
        getAllEmployees: builder.query<IEmployeeResponse[], void>({
            query() {
                return {
                    url: 'user/all'
                }
            },
            providesTags: ["Employees"]
        }),
        createEmployee: builder.mutation({
            query: (data) => {
                return {
                    url: "auth/register",
                    method: 'POST',
                    data
                }
            },
            invalidatesTags: [{ type: "Employees" }],
        }),
        updateEmployee: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `user/${id}`,
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: [{ type: "Employees" }],
        }),
        deleteEmployee: builder.mutation({
            query: (id) => {
                return {
                    method: 'DELETE',
                    url: `user/delete/${id}`,
                }
            },
            invalidatesTags: [{ type: "Employees" }],
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