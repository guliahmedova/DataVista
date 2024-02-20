import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IEmployeesState {
    message: string,
};

const initialState: IEmployeesState = {
    message: "",
};

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setSuccessMsg: (state, action: PayloadAction<IEmployeesState>) => {
            state.message = action.payload.message;
        },
    },
});


export const { setSuccessMsg } = employeesSlice.actions;
export default employeesSlice.reducer;