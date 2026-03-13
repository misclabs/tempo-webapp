import { type ReactNode, type MouseEventHandler } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "primary" | "danger";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({
  children,
  type = "primary",
  ...rest
}: ButtonProps) {
  const classes = [
    "rounded",
    "px-3 py-2",
    "font-semibold",
    "shadow-sm shadow-slate-400 transition-shadow",
    "duration-200",
    "focus-visible:outline-2 focus-visible:outline-sky-300",
    "hover:shadow-md",
    "active:shadow-none",
    "disabled:shadow-none disabled:bg-slate-300 disabled:text-slate-400",
  ];
  switch (type) {
    case "primary":
      classes.push(
        "bg-blue-600",
        "text-blue-50",
        "active:bg-blue-500 active:text-white",
      );
      break;
    case "danger":
      classes.push(
        "bg-rose-600",
        "text-rose-50",
        "active:bg-rose-500 active:text-white",
        "disabled:bg-slate-300 disabled:text-slate-400",
      );
      break;
  }

  return (
    <button {...rest} className={classes.join(" ")} type="button">
      {children}
    </button>
  );
}
