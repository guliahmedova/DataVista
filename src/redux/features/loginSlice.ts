import type { PayloadAction } from '@reduxjs/toolkit';
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
                payload: { user, token },
            }: PayloadAction<{ user: User; token: string }>,
        ) => {
            state.user = user;
            state.token = token;
            console.log("token: ", token);
            console.log("user: ", user);
        },
    },
});

export const reducer = persistReducer(
    {
        key: "CRM:LOGIN",
        storage,
        whitelist: ["login"],
    },
    loginSlice.reducer
);

export const { login } = loginSlice.actions;
export default loginSlice.reducer