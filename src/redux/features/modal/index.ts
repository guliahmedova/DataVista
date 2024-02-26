import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IModalState {
    [key: string]: boolean;
}

const initialState: IModalState = {
    IsModalOpen: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen: (state, action: PayloadAction<{ modalId: string, isOpen: boolean }>) => {
            const { modalId, isOpen } = action.payload;
            state[modalId] = isOpen;
        },
    },
});

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;