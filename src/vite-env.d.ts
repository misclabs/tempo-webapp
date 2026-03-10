type GitStatusResult = {
  readonly branch: string;
  readonly sha: string;
  readonly shortSha: string;
  readonly commitDate: string;
  readonly isDirty: boolean;
};

declare module "virtual:git-status" {
  export const gitInfo: GitStatusResult;
}
