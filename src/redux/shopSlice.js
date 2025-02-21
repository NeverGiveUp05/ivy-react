import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addShop: (state, action) => {
            const currentIndex = state.value.findIndex((prod) => prod.id === action.payload.id);

            if (currentIndex !== -1) {
                state.value[currentIndex].quantity += Number(action.payload.quantity);

                state.value[currentIndex].totalPricePro =
                    state.value[currentIndex].quantity * Number(action.payload.price);

                state.value.toSpliced(currentIndex, 1, state.value[currentIndex]);
            } else {
                action.payload.totalPricePro = action.payload.quantity * Number(action.payload.price);

                state.value.push(action.payload);
            }
        },

        decreaseValue: (state, action) => {
            const currentIndex = state.value.findIndex((item) => item.id === action.payload.id);

            if (action.payload.quantity > 1) {
                state.value[currentIndex].quantity -= 1;
            } else {
                return;
            }

            state.value[currentIndex].totalPricePro = state.value[currentIndex].quantity * Number(action.payload.price);
        },

        increaseValue: (state, action) => {
            const currentIndex = state.value.findIndex((item) => item.id === action.payload.id);

            state.value[currentIndex].quantity += 1;

            state.value[currentIndex].totalPricePro = state.value[currentIndex].quantity * Number(action.payload.price);
        },

        changeNumber: (state, action) => {
            const currentIndex = state.value.findIndex((item) => item.id === action.payload.data.id);

            state.value[currentIndex].quantity = Number(action.payload.value);

            state.value[currentIndex].totalPricePro =
                state.value[currentIndex].quantity * Number(action.payload.data.price);
        },

        checkNumber: (state, action) => {
            const currentIndex = state.value.findIndex((item) => item.id === action.payload.data.id);

            state.value[currentIndex].quantity = 1;

            state.value[currentIndex].totalPricePro = Number(action.payload.data.price);
        },

        removePro: (state, action) => {
            const currentIndex = state.value.findIndex((item) => item.id === action.payload.id);

            state.value = state.value.filter((item, index) => index !== currentIndex);
        },
    },
});

export const { addShop, increaseValue, decreaseValue, changeNumber, checkNumber, removePro } = shopSlice.actions;

export default shopSlice.reducer;
