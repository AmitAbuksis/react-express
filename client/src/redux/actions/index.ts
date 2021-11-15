import { ResultPayload } from "../../types";

export const GET_RESULT_DATA: string = "GET_RESULT_DATA";
export const ADD_LINK: string = "ADD_LINK";


export const getInitialData = (resultData: ResultPayload) => {
    return {
        type: GET_RESULT_DATA,
        payload: resultData
    }
};

export const addSideBarLink = (item: ResultPayload) => {
    return {
        type: ADD_LINK,
        payload: item,
    }
}