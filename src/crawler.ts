import puppeteer from "puppeteer";
import { LOGGER } from "./util/logger";

const fill = async (page: puppeteer.Page, xpath: string, value: string) => {
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
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url, { timeout: 0 });

  // Crawler actions
  await page.waitForXPath("/html/body/div[3]/div[3]/button");
  await click(page, "/html/body/div[3]/div[3]/button");
  // await page.$eval("#user_name", (el: any) => (el.value = email));
  await page.waitForXPath(
    "/html/body/div/div[2]/div/div/div/form/div[1]/input"
  );
  await fill(
    page,
    "/html/body/div/div[2]/div/div/div/form/div[1]/input",
    process.env.YNOV_MAIL || ""
  );
  await page.waitForXPath(
    "/html/body/div/div[2]/div/div/div/form/div[2]/input"
  );
  await fill(
    page,
    "/html/body/div/div[2]/div/div/div/form/div[2]/input",
    process.env.YNOV_PASSWD || ""
  );

  // Click sign in button
  (
    await page.waitForXPath(
      "/html/body/div/div[2]/div/div/div/form/div[4]/button"
    )
  )?.click();

  // Select Campus
  (await page.waitForXPath("/html/body/div/div/div/div[3]/a[5]/div"))?.click();

  await page.waitForTimeout(2000);

  // Admin
  (await page.waitForXPath("/html/body/div/div/nav/div[2]/div/a[3]"))?.click();

  // events
  (
    await page.waitForXPath(
      "/html/body/div/div/div[3]/div/div[2]/div[2]/a[2]/div/button"
    )
  )?.click();

  // Challenge go
  (
    await page.waitForXPath(
      "/html/body/div/div/div[3]/div/div[4]/div[6]/div/div[2]/a[2]"
    )
  )?.click();

  // Users
  (
    await page.waitForXPath(
      "/html/body/div/div/div[3]/div/div[2]/div[3]/div[1]/button"
    )
  )?.click();

  // Get users' names
  await page.waitForTimeout(1000);
  // const nodes = await page.$x(
  //   "/html/body/div/div/div[3]/div/div[2]/div[3]/div[1]/div[3]/div/div/div/div/div[2]"
  // );
  // await page.$$eval(
  //   "#root > div > div.mt10-01.w100p-01.pv11-01.ph12-01.pv7_s-01.ph9_s-01 > div > div:nth-child(3) > div.bgDarkBlackSoft-01.aShadow-01.pv5-01.ph6-01.mb7-01.w100p-01 > div.justifyBetween-01.mb7-01 > div.bgDarkGrey-01.w100p-01.h100p-01.pt10-01.scrollY-01.w100vw-01.zi5-01.fixed-01.t0-01.l0-01 > div > div > div div:nth-child(2)",
  //   (node) => {
  //     node.forEach((el) => {
  //       names.push(el.innerHTML)
  //     });
  //   }
  // );
  const nodes = await page.$$eval(
    "#root > div > div.mt10-01.w100p-01.pv11-01.ph12-01.pv7_s-01.ph9_s-01 > div > div:nth-child(3) > div.bgDarkBlackSoft-01.aShadow-01.pv5-01.ph6-01.mb7-01.w100p-01 > div.justifyBetween-01.mb7-01 > div.bgDarkGrey-01.w100p-01.h100p-01.pt10-01.scrollY-01.w100vw-01.zi5-01.fixed-01.t0-01.l0-01 > div > div > div div:nth-child(2)",
    (nodes) => {
      return nodes.map((el) => el.innerHTML);
    }
  );
  const names = nodes.slice(2, nodes.length);
  // eslint-disable-next-line no-console
  console.log(names);

  const promises = names.map(async (name) => {
    const page = await browser.newPage();
    await page.goto(
      `https://git.ytrack.learn.ynov.com/${name}/tls-challenge-go-21-22`
    );
    await page.waitForSelector(
      "body > div > div.page-content.repository.file.list > div.ui.container > div.ui.segments.repository-summary.repository-summary-language-stats.mt-3 > div.ui.segment.sub-menu.repository-menu > div > div:nth-child(1) > a > b"
    );
    const nbCommits = await page.$eval(
      "body > div > div.page-content.repository.file.list > div.ui.container > div.ui.segments.repository-summary.repository-summary-language-stats.mt-3 > div.ui.segment.sub-menu.repository-menu > div > div:nth-child(1) > a > b",
      (el) => el.innerHTML
    );
    await page.close();
    return {
      name,
      nbCommits,
    };
  });

  const results = await Promise.all(promises);
  const sortedResults = results.sort((a, b) => {
    const commitsA = +a.nbCommits; // ignore upper and lowercase
    const commitsB = +b.nbCommits; // ignore upper and lowercase
    if (commitsA < commitsB) {
      return 1;
    }
    if (commitsA > commitsB) {
      return -1;
    }
    return 0;
  });
  // eslint-disable-next-line no-console
  console.log("Sorted By commits");
  // eslint-disable-next-line no-console
  console.log(
    sortedResults.map((el, index) => {
      return {
        rank: index + 1,
        ...el,
      };
    })
  );
  const sortedByName = results.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  // eslint-disable-next-line no-console
  console.log("Sorted alphabetically");
  // eslint-disable-next-line no-console
  console.log(sortedByName);
};
