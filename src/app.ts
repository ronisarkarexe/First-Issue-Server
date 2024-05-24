import cors from "cors";
import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface GET_DEFAULT_METHOD {
  status: number;
  message: string;
}

app.get("/", (req: Request, res: Response) => {
  const response: GET_DEFAULT_METHOD = {
    status: httpStatus.OK,
    message: "Hello, world!",
  };
  res.status(response.status).json(response);
});

export default app;
