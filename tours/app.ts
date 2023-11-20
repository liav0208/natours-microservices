import express, { Request, Response } from "express";
import { tourRouters } from "./routes/tourRoutes";

const app = express();

app.use(express.json());

app.use(tourRouters);

app.use("*", (req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

export { app };
