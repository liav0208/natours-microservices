import { Request, Response } from "express";
import { Tour } from "../models/tour";

// Create new tour
const createTour = async (req: Request, res: Response) => {
  try {
    const tour = Tour.build(req.body);

    await tour.save();

    res.status(201).json({
      status: "Success",
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get all tours
const getAllTours = async (req: Request, res: Response) => {
  try {
    const queryObj = { ...req.query };
    const excludedFileds = ["page", "sort", "limit", "fields"];

    excludedFileds.forEach((el) => delete queryObj[el]);

    const query = Tour.find(excludedFileds);

    const tours = await query;

    res.status(200).json({
      status: "Success",
      results: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get tour by id
const getTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id);

    res.status(200).json({
      status: "Success",
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Update tour
const updateTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete tour
const deleteTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Tour.findByIdAndDelete(id);

    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export { getAllTours, getTour, createTour, updateTour, deleteTour };
