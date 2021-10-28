import puppeteer from "puppeteer";

const fill = async (page: puppeteer.Page, xpath: string, value: string) => {
  const [field] = await page.$x(xpath);
  await field.type(value);
};

const click = async (page: puppeteer.Page, xPath: string) => {
  await (await page.$x(xPath))[0].click();
};

export const launchCrawler = async (url: string) => {
  //
  // const promises = names.map(async (name) => {
  //   const page = await browser.newPage();
  //   await page.goto(
  //     `https://git.ytrack.learn.ynov.com/${name}/tls-challenge-go-21-22`
  //   );
  //   await page.waitForSelector(
  //     "body > div > div.page-content.repository.file.list > div.ui.container > div.ui.segments.repository-summary.repository-summary-language-stats.mt-3 > div.ui.segment.sub-menu.repository-menu > div > div:nth-child(1) > a > b"
  //   );
  //   const nbCommits = await page.$eval(
  //     "body > div > div.page-content.repository.file.list > div.ui.container > div.ui.segments.repository-summary.repository-summary-language-stats.mt-3 > div.ui.segment.sub-menu.repository-menu > div > div:nth-child(1) > a > b",
  //     (el) => el.innerHTML
  //   );
  //   await page.close();
  //   return {
  //     name,
  //     nbCommits,
  //   };
  // });
  //
  // const results = await Promise.all(promises);
  // const sortedResults = results.sort((a, b) => {
  //   const commitsA = +a.nbCommits; // ignore upper and lowercase
  //   const commitsB = +b.nbCommits; // ignore upper and lowercase
  //   if (commitsA < commitsB) {
  //     return 1;
  //   }
  //   if (commitsA > commitsB) {
  //     return -1;
  //   }
  //   return 0;
  // });
  // // eslint-disable-next-line no-console
  // console.log("Sorted By commits");
  // // eslint-disable-next-line no-console
  // console.log(
  //   sortedResults.map((el, index) => {
  //     return {
  //       rank: index + 1,
  //       ...el,
  //     };
  //   })
  // );
  // const sortedByName = results.sort((a, b) => {
  //   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // // eslint-disable-next-line no-console
  // console.log("Sorted alphabetically");
  // // eslint-disable-next-line no-console
  // console.log(sortedByName);
};
