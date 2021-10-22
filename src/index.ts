import "reflect-metadata";
import { getApplicationConfig } from "./config/application.config";
import { startServer } from "./server";
import { launchCrawler } from "./crawler";
import { scheduleJob } from "node-schedule";

const setCrawlerJob = () => {
  scheduleJob("0 0 10 * * 3", async () => {
    await launchCrawler("https://www.saintclarderiviere.fr/tennis/");
  });
};

(async () => {
  // eslint-disable-next-line no-console
  console.clear();

  const config = getApplicationConfig();

  // Start the server
  await startServer(config);
  setCrawlerJob();

  // Test crawler
  //  console.log('starting crawler');
  //  await launchCrawler("https://www.saintclarderiviere.fr/tennis/");
})();
