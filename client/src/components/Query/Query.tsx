import React from "react";
import useStyles from "./Query.style";
import { TextField, Button  } from "@mui/material";
import { LABELS } from "../../constatnts";
import { QueryProps } from "../../types";

const Query = (props: QueryProps) => {
    const { handleOnChangeQueryInput, value } = props;
    const classes = useStyles();

    return (
        <div className={classes.queryWrapper}>
            <TextField 
                value={value}
                label={LABELS.WRITE_YOUR_QUERY_HERE} 
                onChange={(event) => handleOnChangeQueryInput(event.target.value)}/>
            <Button variant="outlined">{LABELS.SUBMIT}</Button>
        </div>
    );
};

export default Query;