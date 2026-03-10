import { execSync } from "node:child_process";
import type { Plugin } from "vite";

const gitStatusModuleId = "virtual:git-status";
const resolvedModuleId = "\0" + gitStatusModuleId;

export function gitStatus(): Plugin {
  return {
    name: "git-status",
    // version: "0.0.0",
    resolveId(id) {
      if (id === gitStatusModuleId) {
        return resolvedModuleId;
      }
    },
    async load(id) {
      if (id === resolvedModuleId) {
        console.time("collect-git-status");
        const branch = getBranch();
        const sha = getSha();
        const commitDate = getCommitDate();
        const isDirty = getIsDirty();
        const shortSha = getShortSha();
        console.timeEnd("collect-git-status");

        console.log(`exporting git status:
  branch:${branch}
  sha:${sha}
  commitDate:${commitDate}
  isDirty:${isDirty}`);

        return `
          export const gitInfo = {
            branch: "${branch}",
            sha: "${sha}",
            shortSha: "${shortSha}",
            commitDate: "${commitDate}",
            isDirty: ${isDirty}
          };
        `;
      }
    },
  };
}

function execGit(command: string): string {
  return execSync(`git ${command}`, {
    encoding: "utf-8",
  }).trim();
}

const getBranch = () => execGit("rev-parse --abbrev-ref HEAD");
const getSha = () => execGit("rev-parse HEAD");
const getShortSha = () => execGit("rev-parse --short HEAD");
const getCommitDate = () => execGit("log -1 --format=%cd --date=iso-strict");
const getIsDirty = () => execGit("status --porcelain").length > 0;

export default gitStatus;
