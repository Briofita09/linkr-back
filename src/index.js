import express from "express";
import cors from 'cors'
import 'express-async-errors'
import { exceptionHandler } from "./middlewares/exceptionHandler.js";
import { routes } from "./routes/index.js";

const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();

app.use(cors())

app.use(routes)

app.use(express.json());

app.use(exceptionHandler)

app.listen(port, () => console.log(`Server is running on PORT ${port}`))