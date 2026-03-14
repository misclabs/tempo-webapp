import type { ReactElement, ReactNode } from "react";

export interface TextLinkProps {
  to: string;
  className?: string | undefined;
  children: ReactNode;
}
export default function TextLink({
  to,
  className,
  children,
}: TextLinkProps): ReactElement {
  // TODO(jw): text style
  return (
    <a href={to} className={`text-accol dark:text-accol_dk ${className ?? ""}`}>
      {children}
    </a>
  );
}
