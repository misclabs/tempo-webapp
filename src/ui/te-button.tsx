import { type ReactNode, type ButtonHTMLAttributes } from "react";

export type TeButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function TeButton({
  children,
  type = "button",
  className,
  ...props
}: TeButtonProps) {
  className = className ? `te-button ${className}` : "te-button";
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}
