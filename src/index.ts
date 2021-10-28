import "reflect-metadata";
import { getApplicationConfig } from "./config/application.config";
import { main } from "./controller/main.controller";
import { startServer } from "./server";

(async () => {
  // eslint-disable-next-line no-console
  console.clear();

  const config = getApplicationConfig();

  // Start the server
  await startServer(config);

  // Test crawler
  // eslint-disable-next-line no-console
  // console.log("starting crawler");
  // await launchCrawler("https://ytrack.learn.ynov.com/");
  await main();
})();
