import { createSlice } from "@reduxjs/toolkit";


const searchSlice= createSlice({
        name:"searchIssues",
        initialState:null,
        reducers:{
            addSearch:(state,action)=>{
                return action.payload;
            },
            removeSearch:(state,action)=>{
                return null;
            },
        }
});

export const {addSearch, removeSearch} = searchSlice.actions;
export default searchSlice.reducer;