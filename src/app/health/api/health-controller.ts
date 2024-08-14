import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class HealthController {
  run(_req: Request, res: Response) {
    res.status(StatusCodes.OK).send();
  }
}
