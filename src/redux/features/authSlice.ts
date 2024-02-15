import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserAuthState {
    id: number | null;
    access_token: string;
    refresh_token: string;
}
const initialState: UserAuthState = {
    id: null,
    access_token: '',
    refresh_token: '',
};
export const authSlice = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<UserAuthState>) => {
            state.id = action.payload.id,
                state.access_token = action.payload.access_token,
                state.refresh_token = action.payload.refresh_token
        },
    },
})
export const { setAuthState } = authSlice.actions
export default authSlice.reducer