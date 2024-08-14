import http from "node:http";
import { AddressInfo } from "node:net";

import express, { Express } from "express";

import { config } from "@/app/config/config";
import routes from "@/app/routes";

import { Logger } from "@/shared/logger/logger";

import { PinoLogger } from "@/src/contexts/shared/logger/pino/pino-logger";
import {  setAppError } from "@/contexts/shared/error/app-error";
import { StatusCodes } from "http-status-codes";

export class Server {
  private readonly app: Express;
  private httpServer?: http.Server;
  private readonly logger: Logger;
  constructor() {
    this.logger = new PinoLogger();
    this.app = express();
    this.app.use(express.json());
    for (const route of routes) {
      this.app.use(route.path, route.component);
    }
  }
  async start(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.app.listen(config.server.port, () => {
        const { port } = this.httpServer?.address() as AddressInfo;
        this.logger.info("commons:server.running", { port });

        const err = setAppError("dummy", StatusCodes.INTERNAL_SERVER_ERROR, true);
        this.logger.error(err.name, err);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }

  getHttpServer(): http.Server | undefined {
    return this.httpServer;
  }
}
