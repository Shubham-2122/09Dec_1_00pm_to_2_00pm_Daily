import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counter/counterSlice";
import  todoSlice  from "../features/Todolist/todoSlice";

export const store = configureStore({
    reducer:{
        count : counterSlice,
        todo : todoSlice
    },
})