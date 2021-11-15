import { makeStyles } from "@mui/styles";
import { relative } from "path";

const DashboardStyles = makeStyles(() => {
    return {
        dashboardWrapper: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "24px",
        },
        contentComponents: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row",
        },
        sideBar: {
            position: "absolute",
            right: "16px",
            border: "1px solid #dad7d766",
        }
    };
});

export default DashboardStyles;