import type { ReactNode } from "react";

export interface MainContentProps {
  className?: string | undefined;
  children: ReactNode;
}
export default function MainContent({ className, children }: MainContentProps) {
  return (
    <main
      className={`bg-bgcol text-txcol dark:text-txcol_dk dark:bg-bgcol_dk grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ${className ?? ""}`}
    >
      {children}
    </main>
  );
}
