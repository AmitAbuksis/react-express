import { GET_RESULT_DATA } from "../actions";
import { ResultAction } from "../../types";

const initialState = {
    result: [],
};

const resultReducer = (state = initialState, action: ResultAction) => {
    switch(action.type) {
        case GET_RESULT_DATA:
            return {...state, result: action.payload}
        default:
            return state;
    }
};

export default resultReducer;