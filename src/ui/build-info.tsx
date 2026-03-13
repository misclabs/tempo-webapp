import type { ReactElement } from "react";

interface BuildInfoProps {
  gitInfo: GitStatusResult;
}
export default function BuildInfo({ gitInfo }: BuildInfoProps): ReactElement {
  return (
    <div
      id="build-info"
      data-branch={gitInfo.branch}
      data-sha={gitInfo.sha}
      data-commit-date={gitInfo.commitDate}
      data-is-dirty={gitInfo.isDirty}
      className="px-3 py-2 text-right"
    >
      {`${gitInfo.shortSha}`}
    </div>
  );
}
