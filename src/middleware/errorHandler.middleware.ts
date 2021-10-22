import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../util/http-status";

export const errorHandler = (
  err: HttpStatus | Error | undefined,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: HttpStatus;
  if (err === undefined || (err as HttpStatus)?.statusCode === 404) {
    error = HttpStatus.NOT_FOUND;
  } else if (err instanceof HttpStatus) {
    error = err;
  } else {
    error = HttpStatus.INTERNAL_SERVER_ERROR;
  }
  res.status(error.statusCode).json({
    error: true,
    ...error.toJSON(),
  });
  return next();
};
