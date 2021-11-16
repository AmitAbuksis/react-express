import React, {useState} from "react";
import { useDispatch } from "react-redux";
import useStyles from "./Dashboard.style";
import Query from "../Query";
import ResultList from "../ResultList";
import Paging from "../Paging";
import { ResultPayload } from "../../types";
import {API_RESULT_LIST_TITLE, PAGE_COUNT, SAVED_QUERIES} from "../../constants";
import { addSideBarLink, changePage } from "../../redux/actions";
import {useAppSelector} from "../../hooks/useAppSelector";
import { RootState } from "../../redux/store";

const data: ResultPayload[] = [
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
    {url: "https://www.google.com", title: "Google"},
];

const Dashboard = () => {

    const classes = useStyles();
    const [queryValue, setQueryValue] = useState("");
    const dispatch = useDispatch();
    const sideBarList = useAppSelector((state: RootState) => state.SideBar.list);
    const sideBarCounter = useAppSelector((state: RootState) => state.SideBar.counter);
    const currentPage = useAppSelector((state: RootState) => state.Pagination.currentPage) + 1;


    const indexOfLastResult = currentPage * PAGE_COUNT;
    const indexOfFirstResult = indexOfLastResult - PAGE_COUNT;
    const currentResult = data.slice(indexOfFirstResult, indexOfLastResult);
    const numberOfPages = Math.ceil(data.length / PAGE_COUNT);
    
    const isSideBarEmpty = sideBarList.length <= 0;
    const sideBarTitle = `${SAVED_QUERIES}(${sideBarCounter})`;

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

    const handlePageChange = (pageNumber: number) => {
        dispatch(changePage(pageNumber-1));
    };
    
    return (
        <div className={classes.dashboardWrapper}>
            <Query value={queryValue} handleOnChangeQueryInput={handleOnChangeQueryInput}/>
            <div className={classes.contentComponents}>
                <ResultList list={currentResult} handleClick={handleListItemClicked} title={API_RESULT_LIST_TITLE}/>
                <div className={classes.sideBar}>
                    {!isSideBarEmpty && 
                    <ResultList list={sideBarList} handleClick={handleSavedItemClicked} title={sideBarTitle}/>}
                </div>
            </div>
            <Paging count={numberOfPages} currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
};

export default Dashboard;