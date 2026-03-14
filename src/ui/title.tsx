import type { ReactNode } from "react";

type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface TitleProps {
  className?: string | undefined;
  step?: 1 | 2 | 3 | 4 | 5;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}
export default function Title({
  className,
  step = 1,
  as,
  children,
}: TitleProps) {
  const Tag = as ?? (`h${6 - step}` as HeaderTag);
  switch (step) {
    case 1:
      return (
        <Tag
          className={`text-xl font-semibold tracking-tight text-balance sm:text-2xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 2:
      return (
        <Tag
          className={`text-2xl font-semibold tracking-tight text-balance sm:text-3xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 3:
      return (
        <Tag
          className={`text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 4:
      return (
        <Tag
          className={`text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 5:
      return (
        <Tag
          className={`text-6xl font-semibold tracking-tight text-balance sm:text-7xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
  }
}
