import { authApi } from "./api/auth";
import { employeesApi } from "./api/employees";
import { projectsApi } from "./api/projects";
import { reportsApi } from "./api/reports";
import { teamsApi } from "./api/teams";
import modalReducer from "./features/modal";
import authReducer from "./features/user";

export const reducers = {
    auth: authReducer,
    modal: modalReducer,
    [authApi.reducerPath]: authApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer
};

export const middleWares = [authApi.middleware, employeesApi.middleware,
teamsApi.middleware, projectsApi.middleware, reportsApi.middleware];