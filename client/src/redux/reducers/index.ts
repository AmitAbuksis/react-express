import { combineReducers } from "redux";
import ResultReducer from "./result.reducer";
import SideBarReducer from "./sidebar.reducer";
import PaginationReducer from "./pagination.reducer";

const rootReducer = combineReducers({
    Result: ResultReducer,
    SideBar: SideBarReducer,
    Pagination: PaginationReducer,
});

export default rootReducer;