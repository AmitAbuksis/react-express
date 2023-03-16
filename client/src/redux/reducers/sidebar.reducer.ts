import { ADD_LINK } from "../actions";
import { ResultAction, SideBarState } from "../../types";

const initialState = {
    list: [],
} as SideBarState;

const sideBarReducer = (state = initialState, action: ResultAction) => {
    switch(action.type) {
        // case UPDATE_SIDE_BAR_LIST:
        //     return {...state, list: action.payload};
        case ADD_LINK:
            return {...state, list: [...state.list, action.payload]};
        default:
            return state;
    }
};

export default sideBarReducer;