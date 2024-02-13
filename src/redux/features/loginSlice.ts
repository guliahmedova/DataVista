import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface User {
    email: string
    password: string
};

type AuthState = {
    user: User | null;
    token: string | null
};

const loginSlice = createSlice({
    name: 'login',
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        login: (
            state,
            {
                payload
            }
        ) => {
            state.token = payload.data.access_token;
            console.log("token: ", state.token);
        },
    },
});

export const reducer = persistReducer(
    {
        key: "CRM:LOGIN",
        storage,
        whitelist: ["login", "token", "user"],
    },
    loginSlice.reducer
);

export const { login } = loginSlice.actions;
export default loginSlice.reducer