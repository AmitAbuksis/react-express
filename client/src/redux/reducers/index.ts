import { combineReducers } from "redux";
import ResultReducer from "./result.reducer";
import SideBarReducer from "./sidebar.reducer";

const rootReducer = combineReducers({
    Result: ResultReducer,
    SideBar: SideBarReducer,
});

export default rootReducer;