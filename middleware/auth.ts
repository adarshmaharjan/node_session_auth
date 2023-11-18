import { NextFunction, Request, Response } from "express";
import { SessionRequest } from "../types/reqType";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as SessionRequest).user) {
    res.status(401).send("Unauthorized");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
