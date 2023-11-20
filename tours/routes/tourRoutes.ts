import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
} from "../controllers/tourController";
import { checkParams } from "../middlewares/tourMiddleware";

const router = express.Router();

router.param("id", checkParams);

router.route("/api/v1/tours").get(getAllTours).post(createTour);

router
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

export { router as tourRouters };
