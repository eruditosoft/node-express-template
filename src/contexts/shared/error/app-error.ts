import { StatusCodes } from "http-status-codes";
import t from "@/contexts/shared/i18n/config";
import { KeyValue } from "../data/commons";

export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: StatusCodes;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: StatusCodes,
    description: string,
    isOperational: boolean,
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export function setAppError(
  key: string,
  httpCode: StatusCodes,
  isOperational: boolean,
): AppError {
  const { title, description } = getErrorDetails(key);

  return new AppError(
    title as string,
    httpCode,
    description as string,
    isOperational,
  );
}

function getErrorDetails(key: string): KeyValue {
  return {
    title: t(`errors:${key}.name`),
    description: t(`errors:${key}.description`),
  };
}
