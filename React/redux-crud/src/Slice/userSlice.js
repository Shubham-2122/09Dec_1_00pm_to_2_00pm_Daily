import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// show read
export const showuser = createAsyncThunk(
    'showuser', async (arug, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = await res.data
            return result;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const creteuser = createAsyncThunk(
    'creteuser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/user", data)
            const result = await res.data
            return result;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteuser = createAsyncThunk(
    'deleteuser', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/user/${id}`)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateuser = createAsyncThunk(
    'updateuser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/user/${data.id}`, data)
            const result = await res.data;
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        loading: false,
        error: ""
    },
    reducers: {
        userPending: (state) => {
            state.loading = true
        },
        userFullfiled: (state, action) => {
            state.loading = false;
            state.user.push(action.payload)
        },
        userRejected: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // read with promise
            .addCase(showuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(showuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            //create
            .addCase(creteuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(creteuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload);
            })

            .addCase(creteuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // delete 
            .addCase(deleteuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteuser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload

                if (id) {
                    state.user = state.user.filter((data) => data.id !== id)
                }
            })
            .addCase(deleteuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // update case
            .addCase(updateuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = state.user.map((ele) => {
                    // update query
                    ele.id = action.payload ? action.payload.id : ele
                })

            })
            .addCase(updateuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

    }
})

export const { userPending, userFullfiled, userRejected } = userSlice.actions;

export default userSlice.reducer;