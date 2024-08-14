import pino, { LoggerOptions } from "pino";
import { config } from "@/src/app/config/config";
import { colorizerFactory } from "pino-pretty";

export const options: LoggerOptions = {
  name: process.env.APP_NAME,
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  
  customLevels: 'debug',
  transport: {
    targets: [
      {
        target: "pino/file",
        options: { destination: config.logger.pino.pathLog, mkdir: true },
      },
      {
        target: "pino-pretty",
        options: { destination: process.stdout.fd, colorizerFactory:true },
      },
    ],
  },
};
