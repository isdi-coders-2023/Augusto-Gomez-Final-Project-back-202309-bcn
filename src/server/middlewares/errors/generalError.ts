import "./endpointNotFound.js";
import { type NextFunction, type Request, type Response } from "express";
import type CustomError from "../../CustomError/CustomError.js";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("movies:server:middlewares:errors");

const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.customMessage ?? error.message;
  debug(chalk.red("Error: ", privateMessage));

  res.status(statusCode).json({ error: privateMessage });
};

export default generalError;
