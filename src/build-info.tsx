import { gitInfo } from "virtual:git-status";

export function BuildInfo() {
  return (
    <div
      id="build-info"
      data-branch={gitInfo.branch}
      data-sha={gitInfo.sha}
      data-commit-date={gitInfo.commitDate}
      data-is-dirty={gitInfo.isDirty}
    >
      {`${gitInfo.shortSha}`}
    </div>
  );
}
