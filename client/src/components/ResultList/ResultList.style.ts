import { makeStyles } from "@mui/styles";

const ResulListStyles = makeStyles(() => {
    return {
        resultListWrapper: {
            margin: "16px",
            padding: "8px"
        },
        title: {
            fontSize: "24px",
            fontWeight: 600,
            borderBottom: "1px solid gray",
        },
        resultItem: {
            padding: "8px",
            margin: "8px",
            cursor: "pointer",
            textAlign: "center",
        },
        divider: {
            borderBottom: "1px solid #c1bdbd",
        }
    };
});

export default ResulListStyles;