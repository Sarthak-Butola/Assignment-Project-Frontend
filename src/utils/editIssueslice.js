import { createSlice } from "@reduxjs/toolkit";

const editIssueSlice = createSlice({
    name:"EditIssue",
    initialState:null,
    reducers:{
        addInfo:(state,action)=>{
            return action.payload;
        },
        removeInfo:(state,action)=>{
            return null;
        },
    }

});

export const {addInfo, removeInfo} = editIssueSlice.actions;
export default editIssueSlice.reducer;