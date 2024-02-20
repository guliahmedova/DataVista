import { authApi } from "./api/auth";
import { employeesApi } from "./api/employees";
import authReducer from "./features/user";

export const reducers = {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer
};

export const middleWares = [authApi.middleware, employeesApi.middleware];