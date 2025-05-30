import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter", //action
    initialState,
    reducers: {
        // logic
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        zero: (state) => {
            state.value = 0
        }
    }
})

// Acation  
export const { increment, decrement, zero } = counterSlice.actions; 

// reducer
export default counterSlice.reducer;