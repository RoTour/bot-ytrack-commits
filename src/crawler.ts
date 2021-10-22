import puppeteer from "puppeteer";
import { LOGGER } from "./util/logger";

const fill = async (page: puppeteer.Page, xpath: string, value: string) => {
  LOGGER.log("Filling", xpath, "with", value);
  const [field] = await page.$x(xpath);
  await field.type(value);
};

const click = async (page: puppeteer.Page, xPath: string) => {
  await (await page.$x(xPath))[0].click();
};

export const launchCrawler = async (url: string) => {
  LOGGER.log("Creating browser...");
  const browser = await puppeteer.launch({
    timeout: 0,
    args: ["--no-sandbox"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url, { timeout: 0 });

  // Crawler actions
};
