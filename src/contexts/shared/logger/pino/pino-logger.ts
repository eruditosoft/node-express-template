import { KeyValue } from "@/contexts/shared/data/commons";
import { Logger } from "@/contexts/shared/logger/logger";
import t from "@/contexts/shared/i18n/config";

import pino from "pino";
import { options } from "./config/properties";

export class PinoLogger implements Logger {
  private readonly logger;
  constructor() {
    this.logger = pino(options);
  }
  /**
   *
   * @param message Title error
   * @param attributes Object or Error
   */

  error(message: string, attributes?: unknown): void {
    message = t(message);
    if (attributes) {
      this.logger.error(attributes, message);
    } else {
      this.logger.error(message);
    }
  }

  debug(message: string, attributes?: KeyValue): void {
    message = t(message);
    if (attributes) {
      this.logger.debug({ attributes: { ...attributes } }, message);
    } else {
      this.logger.debug(message);
    }
  }
  info(message: string, attributes?: KeyValue): void {
    message = t(message);
    if (attributes) {
      this.logger.info({ attributes: { ...attributes } }, message);
    } else {
      this.logger.info(message);
    }
  }
  warn(message: string, attributes?: KeyValue): void {
    message = t(message);
    if (attributes) {
      this.logger.warn({ attributes: { ...attributes } }, message);
    } else {
      this.logger.warn(message);
    }
  }
}
