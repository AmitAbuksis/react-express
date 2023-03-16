import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import GoDockService from "../../services/goDock.service";
import { ResultPayload } from "../../types";
import { addSideBarLink, changePage, updateSideBarList } from "../actions";
import { RootState } from "../store";

export const addToSideBar = (item: ResultPayload): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    dispatch(addSideBarLink(item));
};

export const paginate = (pageNumber: number): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    dispatch(changePage(pageNumber - 1));
};

export const getInitialData = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        const initialData = await GoDockService.getInitialData() as ResultPayload[];
        if(initialData && initialData.length) {
            dispatch(updateSideBarList(initialData));
        }
    } catch(err) {
        throw err;
    }
 
};

export const savedItemClick = (item: ResultPayload): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
        await GoDockService.saveItem(item) as ResultPayload[];
    } catch(err) {
        throw err;
    }
};