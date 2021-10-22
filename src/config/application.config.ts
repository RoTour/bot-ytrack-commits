import dotenv from "dotenv";
import path from "path";

export interface ApplicationConfig {
  baseUrl: string;
  port: number | string;
  production: boolean;
}

const config: ApplicationConfig = {
  baseUrl: "",
  port: 0,
  production: false,
};
let isInitialized = false;

const initializeConfig = () => {
  const production = process.env.NODE_ENV === "production";
  config.production = production;
  if (production) {
    dotenv.config({ path: path.resolve("production.env") });
  } else {
    dotenv.config();
  }

  config.baseUrl = process.env.BASE_URL || "http://localhost";
  config.port = process.env.PORT || 3000;

  isInitialized = true;
};

export function getApplicationConfig(): ApplicationConfig {
  if (!isInitialized) initializeConfig();
  return config;
}
