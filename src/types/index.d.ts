import { NextFunction, Request, Response } from "express";

/**
 * @class
 * @classdesc Class Responsable for error handling
 */
declare interface IErrorHandler {
  /**
   * @public
   * @param {any} err 
   * @param {Request} request 
   * @param {Response} response 
   * @param {NextFunction} next
   * @returns {void} 
   */
    handle(
    err: any,
    request: Request,
    response: Response,
    next: NextFunction
  ): void;
}
