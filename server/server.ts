import express, {Application} from "express";
import path from "path";
import routes from "./routes";


const PORT: number = +process.env.PORT || 3001;

const app: Application = express();

app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, "../client/build/static")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));