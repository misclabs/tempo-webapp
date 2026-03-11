import { type ReactNode, type MouseEventHandler } from "react";

export type TeButtonProps = {
  children: ReactNode;
  type?: "solid" | "secondary" | "danger";
  disabled?: boolean | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function TeButton({
  children,
  type = "solid",
  ...rest
}: TeButtonProps) {
  let className = "rounded text-sm px-3 py-2 font-semibold ";
  switch (type) {
    case "solid":
      className = `${className} bg-blue-600  text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`;
      break;

    case "secondary":
      className = `${className} border border-gray-300 bg-white text-gray-900 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`;
      break;

    case "danger":
      className = `${className} bg-red-600 text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`;
      break;
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
