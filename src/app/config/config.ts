export const config = {
  enviroment: process.env.NODE_ENV,
  appName: process.env.APP_NAME,
  language: process.env.LOCAL_LANG ?? "en",
  server: {
    port: process.env.PORT || 3000,
  },
  logger: {
    pino: {
      pathLog: process.env.PATH_LOG || "./logs/output.log",
    },
  },
};
