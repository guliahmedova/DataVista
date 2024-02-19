import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ILogin, UserDataDto } from './types';

interface IAuthState {
    user: UserDataDto | null;
    access_token: string | null;
    expired_date: string | null;
};

const initialState: IAuthState = {
    user: null,
    access_token: null,
    expired_date: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },
        setToken: (state, action: PayloadAction<ILogin>) => {
            const { access_token, expired_date } = action.payload;
            return {
                ...state,
                access_token,
                expired_date,
            };
        },
        logout: () => initialState
    },
});

export const reducer = persistReducer(
    {
        key: "VISTA:AUTH",
        storage,
        whitelist: ["user", "access_token"]
    },
    authSlice.reducer
);

export const { setToken, logout, setUser } = authSlice.actions;
export default reducer;