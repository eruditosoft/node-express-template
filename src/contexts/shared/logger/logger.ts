import { KeyValue } from "@/contexts/shared/data/commons";

export interface Logger {
  info(message: string, attributes?: KeyValue): void;
  debug(message: string, attributes?: KeyValue): void;
  warn(message: string, attributes?: KeyValue): void;
  error(message: string, attributes?: unknown): void;
}
