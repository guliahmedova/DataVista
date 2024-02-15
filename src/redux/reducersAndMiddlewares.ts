import authReducer from "./features/authSlice";
import { authApi } from "./api/authApi";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
});

export const middleWares = [authApi.middleware];