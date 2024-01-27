import { combineReducers } from "redux";
import { userSlice } from "../Features/UserSlice";


export const rootReducer = combineReducers({
    user: userSlice.reducer,
})