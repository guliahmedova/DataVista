import loginReducer from "./features/loginSlice";
import { loginApi } from "./api/loginApi";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    login: loginReducer,
    [loginApi.reducerPath]: loginApi.reducer
});

export const middleWares = [loginApi.middleware];