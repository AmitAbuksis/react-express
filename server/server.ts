import express, {Application} from "express";
//import path from "path";
import routes from "./routes";


const PORT: number = +process.env.PORT || 5000;

const app: Application = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));