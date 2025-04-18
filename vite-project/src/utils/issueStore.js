import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from "./dashBoardSlice";
import searchReducer from "./searchSlice";

const issueStore = configureStore({
    reducer:{
        dashBoardIssues:dashBoardReducer,
        searchIssues:searchReducer,
    },
});

export default issueStore;