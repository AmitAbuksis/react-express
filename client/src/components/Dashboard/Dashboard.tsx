import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./Dashboard.style";
import Query from "../Query";
import ResultList from "../ResultList";
import { ResultPayload } from "../../types";
import {API_RESULT_LIST_TITLE, SAVED_QUERIES} from "../../constatnts";
import { addSideBarLink } from "../../redux/actions";
import {useAppSelector} from "../../hooks/useAppSelector";
import { RootState } from "../../redux/store";

const data: ResultPayload[] = [
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
];

const Dashboard = () => {

    const classes = useStyles();
    const [queryValue, setQueryValue] = useState("");
    const sideBarList = useAppSelector((state: RootState) => state.SideBar.sideBarList);
    const dispatch = useDispatch();

    const isSideBarEmpty = sideBarList.length <= 0;

    const handleOnChangeQueryInput = (value: string) => {
        setQueryValue(value);
    };

    const handleListItemClicked = (item: ResultPayload) => {
        dispatch(addSideBarLink(item));
        window.open(item.url, '_blank');
    };

    const handleSavedItemClicked = (item: ResultPayload) => {
        console.log("new Api Call");
    };
    
    return (
        <div className={classes.dashboardWrapper}>
            <Query value={queryValue} handleOnChangeQueryInput={handleOnChangeQueryInput}/>
            <div className={classes.contentComponents}>
                <ResultList list={data} handleClick={handleListItemClicked} title={API_RESULT_LIST_TITLE}/>
                <div className={classes.sideBar}>
                    {!isSideBarEmpty && <ResultList list={sideBarList} handleClick={handleSavedItemClicked} title={SAVED_QUERIES}/>}
                </div>
            </div>
        </div>
    )
};

export default Dashboard;