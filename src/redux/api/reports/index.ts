import { APIBaseQuery } from '@/redux/axiosBase';
import { createApi } from '@reduxjs/toolkit/query/react';

export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: APIBaseQuery,
    tagTypes: ["reports"],
    endpoints: (builder) => ({
        getReport: builder.query({
            query: (id) => ({ url: `reports/${id}` })
        }),
        getAllReports: builder.query({
            query: () => ({ url: 'reports' })
        }),
        createReport: builder.mutation({
            query: (data) => {
                return {
                    url: "reports",
                    method: 'POST',
                    data
                }
            },
            invalidatesTags: [{ type: "reports" }],
        }),
        updateReport: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `reports/${id}`,
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: [{ type: "reports" }],
        }),
        deleteReport: builder.mutation({
            query: (id) => {
                return {
                    method: 'DELETE',
                    url: `reports/${id}`,
                }
            },
            invalidatesTags: [{ type: "reports" }],
        }),
    }),
});

export const {
    useGetReportQuery,
    useGetAllReportsQuery,
    useCreateReportMutation,
    useUpdateReportMutation,
    useDeleteReportMutation
} = reportsApi