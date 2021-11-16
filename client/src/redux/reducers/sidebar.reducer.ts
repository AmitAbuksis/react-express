import { ADD_LINK } from "../actions";
import { ResultAction, SideBarState } from "../../types";

const initialState = {
    list: [],
    counter: 0,
} as SideBarState;

const sideBarReducer = (state = initialState, action: ResultAction) => {
    switch(action.type) {
        case ADD_LINK:
            return {...state, list: [...state.list, action.payload], counter: state.list.length+1};
        default:
            return state;
    }
};

export default sideBarReducer;