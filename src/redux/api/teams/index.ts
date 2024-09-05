import { APIBaseQuery } from '@/redux/axiosBase';
import { ITeamResponse } from '@/redux/models';
import { createApi } from '@reduxjs/toolkit/query/react';

export const teamsApi = createApi({
    reducerPath: 'teamsApi',
    baseQuery: APIBaseQuery,
    tagTypes: ["Teams"],
    endpoints: (builder) => ({
        getTeam: builder.query({
            query(id) {
                return {
                    url: `teams/${id}`
                }
            },
            providesTags: ["Teams"]
        }),
        getAllTeams: builder.query<ITeamResponse[], void>({
            query() {
                return {
                    url: 'teams'
                }
            },
            providesTags: ["Teams"],
        }),
        createTeam: builder.mutation({
            query: (data) => {
                return {
                    url: "teams",
                    method: 'POST',
                    data
                }
            },
            invalidatesTags: [{ type: "Teams" }],
        }),
        updateTeam: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `teams/${id}`,
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: [{ type: "Teams" }],
        }),
        deleteTeam: builder.mutation({
            query: (id) => {
                return {
                    method: 'DELETE',
                    url: `teams/${id}`,
                }
            },
            invalidatesTags: [{ type: "Teams" }],
        }),
    }),
});

export const {
    useGetTeamQuery,
    useGetAllTeamsQuery,
    useCreateTeamMutation,
    useUpdateTeamMutation,
    useDeleteTeamMutation
} = teamsApi;