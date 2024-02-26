import express, { Application, Request, Response } from "express";
import router from "./routes";
import notFound from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import cors from "cors";

// application
const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("server working");
});

// application routes
app.use("/api", router);

// global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
