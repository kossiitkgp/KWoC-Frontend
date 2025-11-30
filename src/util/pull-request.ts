export type PullRequest = {
  owner: string;
  repo: string;
  number: number;
};

export function getPRDetails(url: string): PullRequest {
  const [owner, repo, , number] = url.split("/").slice(-4);
  return {
    owner,
    repo,
    number: parseInt(number),
  };
}
