import loginReducer from "./features/loginSlice";
import { loginApi } from "./api/loginApi";

export const reducers = {
    login: loginReducer,
    [loginApi.reducerPath]: loginApi.reducer,
};

export const middleWares = [loginApi.middleware];