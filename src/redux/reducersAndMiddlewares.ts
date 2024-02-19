import { authApi } from "./api/auth/authApi";
import authReducer from "./features/user";

export const reducers = {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
};

export const middleWares = [authApi.middleware];