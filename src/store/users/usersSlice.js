import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    results:[],
    isLoading: false,
    error:undefined,
}

export const getUsers = createAsyncThunk("users/getResults",async (arg,{rejectWithValue})=>{
    try {
        const {results}=await fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json());
        return results;
    } catch (error) {
        rejectWithValue(error.response.results);
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers: {
        [getUsers.pending]: (state,{payload}) => {
            state.isLoading= true;
        },
        [getUsers.fulfilled]: (state,{payload}) => {
            state.isLoading= false;
            state.results= payload;
        },
        [getUsers.rejected]: (state,{payload}) => {
            state.isLoading= false;
            state.error= payload;
        }
    },
}
);


export default usersSlice.reducer;