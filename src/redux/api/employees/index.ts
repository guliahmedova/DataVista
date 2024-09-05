import { APIBaseQuery } from '@/redux/axiosBase';
import { IEmployeeResponse } from '@/redux/models';
import { createApi } from '@reduxjs/toolkit/query/react';
import { notification } from 'antd';

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
                    url: `user/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: [{ type: "Employees" }],
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    notification.success(data.msg);
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        updateEmployeeStatus: builder.mutation({
            query: ({ id, status }) => {
                return {
                    url: `user/status/${id}?status=${status}`,
                    method: 'PUT'
                }
            },
            invalidatesTags: [{ type: "Employees" }],
        })
    })
});

export const {
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
    useGetEmployeeQuery,
    useGetAllEmployeesQuery,
    useUpdateEmployeeStatusMutation
} = employeesApi;