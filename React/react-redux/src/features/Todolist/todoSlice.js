import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: ["Himani", "Vishu"]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo, index) => index !== action.payload)
        }
    }
})

export const { addtodo,removetodo } = todoSlice.actions

export default todoSlice.reducer;