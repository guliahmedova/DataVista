import { createSlice } from '@reduxjs/toolkit';

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        teams: [],
        loading: false,
        error: null,
    },
    reducers: {
        sayHi: () => {
            console.log("THI TEAMS");
        }
    },
});

export const { } = teamSlice.actions;
export default teamSlice.reducer;
