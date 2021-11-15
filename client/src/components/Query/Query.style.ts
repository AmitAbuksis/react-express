import { makeStyles } from "@mui/styles";

const QueryStyles = makeStyles(() => {
    return {
        queryWrapper: {
           display: "flex",
           flexDirection: "column",
        },
        queryInput: {
            margin: "8px",
            padding: "8px",
        },
    };
});

export default QueryStyles;