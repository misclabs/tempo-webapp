import { type ReactNode, type MouseEventHandler } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({
  children,
  type = "primary",
  ...rest
}: ButtonProps) {
  const typeClasses = {
    primary:
      "bg-blue-600 text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
    secondary:
      "border border-gray-300 bg-white text-gray-900 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
    danger:
      "bg-red-600 text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
  }[type];

  return (
    <button
      {...rest}
      className={`rounded px-3 py-2 text-sm font-semibold ${typeClasses}`}
      type="button"
    >
      {children}
    </button>
  );
}
