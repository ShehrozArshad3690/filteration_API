import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./routes/patientRoute";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(router);

app.listen(port, () => console.log(`http://localhost:${port}`));
