import React from "react";
import useStyles from "./Paging.style";
import { PagingProps } from "../../types";
import { Pagination } from "@mui/material";

const Paging = (props: PagingProps) => {
    const { count, currentPage, handlePageChange } = props;
    const classes = useStyles();

    return (
        <div className={classes.pagingWrapper}>
            <Pagination count={count} page={currentPage} onChange={(event, pageNumber) => handlePageChange(pageNumber)}/>
        </div>
    )
};

export default Paging;