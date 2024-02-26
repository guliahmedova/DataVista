import { APIBaseQuery } from '@/redux/axiosBase';
import { createApi } from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: APIBaseQuery,
    tagTypes: ["projects"],
    endpoints: (builder) => ({
        getProject: builder.query({
            query: (id) => ({ url: `projects/${id}` })
        }),
        getAllProjects: builder.query({
            query: () => ({ url: 'projects' })
        }),
        createProject: builder.mutation({
            query: (data) => {
                return {
                    url: "projects",
                    method: 'POST',
                    data
                }
            },
            invalidatesTags: [{ type: "projects" }],
        }),
        updateProject: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `projects/${id}`,
                    method: 'PUT',
                    data
                }
            },
            invalidatesTags: [{ type: "projects" }],
        }),
        deleteProject: builder.mutation({
            query: (id) => {
                return {
                    method: 'DELETE',
                    url: `projects/${id}`,
                }
            },
            invalidatesTags: [{ type: "projects" }],
        }),
    }),
});

export const {
    useGetProjectQuery,
    useGetAllProjectsQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation
} = projectsApi