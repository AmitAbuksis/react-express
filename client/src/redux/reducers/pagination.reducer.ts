import { PaginationActions, PaginationState } from "../../types";
import { PAGE_CHANGE } from "../actions";

const initialState = {
    currentPage: 0,
} as PaginationState;

const paginationReducer = (state = initialState, action: PaginationActions) => {
    switch(action.type) {
        case PAGE_CHANGE:
            return {...state, currentPage: action.payload};
        default:
            return state;
    }
};

export default paginationReducer;