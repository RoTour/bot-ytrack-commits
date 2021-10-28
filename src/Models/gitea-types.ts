export interface AuthorOrCommitter {
  name: string;
  email: string;
  date: string;
}
export interface TreeOrParentsEntity {
  url: string;
  sha: string;
  created: string;
}
export interface FilesEntity {
  filename: string;
}
export interface Commit {
  url: string;
  author: AuthorOrCommitter;
  committer: AuthorOrCommitter;
  message: string;
  tree: TreeOrParentsEntity;
}
export interface ApiCommitResponse {
  url: string;
  sha: string;
  created: string;
  commit: Commit;
  author?: null;
  committer?: null;
  parents?: TreeOrParentsEntity[] | null;
  files?: (FilesEntity | null)[] | null;
}
