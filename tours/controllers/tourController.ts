import { Request, Response } from "express";

const getAllTours = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    data: "Will added",
  });
};

const getTour = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    data: "Will added",
  });
};

const createTour = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    data: "Will added",
  });
};

const updateTour = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    data: "Will added",
  });
};

const deleteTour = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    data: "Will added",
  });
};

export { getAllTours, getTour, createTour, updateTour, deleteTour };
