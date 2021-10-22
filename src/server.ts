import express, { Express, Request, Response } from "express";
import { LOGGER } from "./util/logger";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { HttpStatus } from "./util/http-status";
import { ApplicationConfig } from "./config/application.config";
import { router as pageRouter } from "./router/pages.router";
import "reflect-metadata";

const startServer = async ({
  port,
  production,
}: ApplicationConfig): Promise<Express> => {
  const app: Express = express();

  // Setup auto-parse of 'application.json' bodies and cookies
  app.use(express.json());
  // server.use(cookieParser());

  // Setup Routers
  app.use("", pageRouter);

  // ? Catch all errors
  app.use((req, res, next) => next(HttpStatus.NOT_FOUND));
  app.use(errorHandler);

  app.listen(port, () => {
    LOGGER.log(
      `⚡️[server]: Server is running at ${
        process.env.BASE_URL || "http://localhost"
      }:${port}`
    );
  });
  return app;
};

export { startServer };
