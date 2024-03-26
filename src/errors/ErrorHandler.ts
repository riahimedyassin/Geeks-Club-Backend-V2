import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { injectable } from "inversify";
import { IErrorHandler } from "../types";
import { ValidationError } from "class-validator";

@injectable()
export class ErrorHandler implements IErrorHandler {
  private response(
    res: Response,
    error: any,
    message: string = ReasonPhrases.INTERNAL_SERVER_ERROR,
    status: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    return res.status(status).json({
      error,
      message,
      status,
    });
  }
  public handle(err: any, req: Request, res: Response, next: NextFunction) {
    if (err) {
      switch (err) {
        case err instanceof Error: {
          return this.response(res, err);
        }
        case err instanceof ValidationError:
          return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Validation Error",
            errors: err,
            status: StatusCodes.BAD_REQUEST,
          });
      }
    }
    next();
  }
}
