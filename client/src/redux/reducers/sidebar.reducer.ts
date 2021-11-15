import { ADD_LINK } from "../actions";
import { ResultAction, SideBarState } from "../../types";

const initialState = {
    sideBarList: [],
} as SideBarState;

const sideBarReducer = (state = initialState, action: ResultAction) => {
    switch(action.type) {
        case ADD_LINK:
            return {...state, sideBarList: [...state.sideBarList, action.payload]};
        default:
            return state;
    }
};

export default sideBarReducer;