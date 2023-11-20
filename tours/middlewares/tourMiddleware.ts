import { Request, Response, NextFunction } from "express";

const checkParams = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params.id);

  next();
};

export { checkParams };
