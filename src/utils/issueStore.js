import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from "./dashBoardSlice";
import searchReducer from "./searchSlice";
import editIssueReducer from "./editIssueslice"

const issueStore = configureStore({
    reducer:{
        dashBoardIssues:dashBoardReducer,
        searchIssues:searchReducer,
        EditIssue:editIssueReducer,
    },
});

export default issueStore;