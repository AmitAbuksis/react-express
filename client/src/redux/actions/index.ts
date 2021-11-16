import { ResultPayload } from "../../types";

export const GET_RESULT_DATA: string = "GET_RESULT_DATA";
export const ADD_LINK: string = "ADD_LINK";
export const PAGE_CHANGE: string = "PAGE_CHANGE";


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
};

export const changePage = (pageNumber: number) => {
    return  {
        type: PAGE_CHANGE,
        payload: pageNumber,
    }
};