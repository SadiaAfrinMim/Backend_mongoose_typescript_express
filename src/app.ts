import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

app.get("/", (_, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to our note app server",
  });
});
export default app;