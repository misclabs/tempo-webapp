import type { ReactNode } from "react";

export interface TextProps {
  className?: string;
  step?: -1 | 0 | 1 | 2 | 3 | 4 | 5;
  as?: "span" | "div" | "label" | "p";
  children: ReactNode;
}
export default function Text({ className, step = 0, as, children }: TextProps) {
  const Tag = as ?? "span";
  switch (step) {
    case -1:
      return (
        <Tag
          className={`text-sm font-light text-pretty sm:text-base ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 0:
      return (
        <Tag
          className={`text-base font-normal text-pretty sm:text-lg ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 1:
      return (
        <Tag
          className={`text-xl font-normal text-pretty sm:text-2xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 2:
      return (
        <Tag
          className={`text-2xl font-normal text-pretty sm:text-3xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 3:
      return (
        <Tag
          className={`text-3xl font-normal text-pretty sm:text-4xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 4:
      return (
        <Tag
          className={`text-4xl font-normal text-pretty sm:text-5xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
    case 5:
      return (
        <Tag
          className={`text-5xl font-normal text-pretty sm:text-6xl ${className ?? ""}`}
        >
          {children}
        </Tag>
      );
  }
}
