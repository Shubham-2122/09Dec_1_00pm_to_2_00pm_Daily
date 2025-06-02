import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const showadmin = createAsyncThunk(
    'showadmin' , async(arug, { rejectWithValue })=>{
        try {
            
            const res = await axios.get("http://localhost:3000/admin");
            const resp = await res.data
            return resp

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const adminSlice = createSlice({
    name:"admin",
    initialState : {
        admin : [],
        loading : false,
        error : ""
    },
    reducers:{
        adminpending : (state)=>{
            state.loading = true
        },
        adminFullsiled : (state,action)=>{
            state.loading = false,
            state.admin.push(action.payload)
        },
        adminrejcted : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder

        .addCase(showadmin.pending,(state)=>{
            state.loading = true
        })
        .addCase(showadmin.fulfilled,(state,action)=>{
            state.loading = false,
            state.admin = action.payload
        })
        .addCase(showadmin.rejected,(state,action)=>{
            state.loading =false,
            state.error = action.payload
        })
    }
})
export const {adminpending,adminFullsiled,adminrejcted} = adminSlice.actions;

export default adminSlice.reducer;