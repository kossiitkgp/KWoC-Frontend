// Formats a pull request in the format [org]/[repo]#[number] from the url
export function formatPullRequest(url: string): string {
  return url
    .replace("https://github.com/", "")
    .replace("pull/", "")
    .split("")
    .reverse()
    .join("")
    .replace("/", "#")
    .split("")
    .reverse()
    .join("");
}
