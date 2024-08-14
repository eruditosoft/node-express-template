export interface KeyValue {
  [key: string]: string | number | KeyValue;
}
export interface LoggerFunction {
  (message: string, attributes?: KeyValue | unknown): void;
}
