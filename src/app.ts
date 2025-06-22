import express, { Application, NextFunction, Request, Response } from "express";
import middlewareForErrorHandler from "./app/middlewares/error";
import ErrorHandler from "./app/utils/errorHandler";
import bookRoute from "./app/routes/book.route";


const app: Application = express();


app.use(express.json());


app.get("/", (_, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Library Management server is running",
  });
});


app.use("/api", bookRoute);


app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ErrorHandler(`Route ${req.originalUrl} not found`, 404));
});

app.use(middlewareForErrorHandler);

export default app;