import axios from "axios";
import { ApiCommitResponse } from "../Models/gitea-types";

const ytrackAPI = "https://git.ytrack.learn.ynov.com/api/v1";

export const getCommits = (
  user: string,
  repo: string,
  page: number
): Promise<any> => {
  const url = `${ytrackAPI}/repos/${user}/${repo}/commits`;
  return axios.get(url, {
    headers: { Authorization: `token ${process.env.GITEA_API_TOKEN}` },
    params: { page },
  });
};

export const processCommits = (responses: ApiCommitResponse[]): string[] => {
  return responses.map((it) => it.commit.committer.date);
};
