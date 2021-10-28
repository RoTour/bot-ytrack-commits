import { getCommits, processCommits } from "../logic/ytrack-api";
import { LOGGER } from "../util/logger";

export const main = async () => {
  // const ytrackUrl = "https://ytrack.learn.ynov.com/";
  // const users = await getNamesForPool(ytrackUrl);
  const repo = "tls-challenge-go-21-22";
  const users = [{ name: "LTASSONE" }];

  const promises = users.map((it) => {
    return (async (): Promise<{ name: string; commits: string[] }> => {
      let response: any = null;
      const commits: string[] = [];
      let page = 1;
      do {
        response = await getCommits(it.name, repo, page);
        page++;
        commits.push(...processCommits(response.data));
      } while (response.headers["x-hasmore"] === "true");
      return {
        name: it.name,
        commits: commits.sort(),
      };
    })();
  });

  const result = await Promise.all(promises);
  LOGGER.log(result);
  LOGGER.log(result[0].commits.length);

  // try {
  //   const response = await getCommits("LTASSONE", "tls-challenge-go-21-22");
  //   processCommits(response.data);
  //   LOGGER.log(response);
  // } catch (e) {
  //   LOGGER.log(e);
  // }
};
