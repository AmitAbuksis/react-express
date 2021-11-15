import React from "react";
import useStyles from "./ResultList.style";
import { ResultListProps } from "../../types";

const ResultList = (props: ResultListProps) => {
    const { list, handleClick, title } = props;
    const classes = useStyles();

    const renderResultList = () => {
        if(list.length) {
            return list.map((item, index) => {
                return (
                    <div key={index}>
                        <div className={classes.resultItem} onClick={() => handleClick(item)}>{item.title}</div>
                        {index !== list.length && <div className={classes.divider}></div>}
                    </div>
                )
            });
        }else {
            return null;
        }
    }

    return (
        <div className={classes.resultListWrapper}>
            <div className={classes.title}>{title}</div>
            <div>
                {renderResultList()}
            </div>
        </div>
    )
};

export default ResultList;