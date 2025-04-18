import { createSlice } from "@reduxjs/toolkit";


const dashBoardSlice = createSlice({
        name:"dashBoardIssues",
        initialState:null,
        reducers:{
            addIssues:(state,action)=>{
                return action.payload;
            },
            removeIssues:(state,action)=>{
                return null;
            },
        }
});


export const {addIssues, removeIssues} = dashBoardSlice.actions;
export default dashBoardSlice.reducer;