import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config";
import {
  defaultNotFoundHandler,
  globalErrorHandler,
} from "./controllers/errorController";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(env.STATIC_PATH, express.static(env.PUBLIC_PATH));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(defaultNotFoundHandler);
app.use(globalErrorHandler);

export default app;
