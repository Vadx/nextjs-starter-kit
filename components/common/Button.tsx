import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const Button = ({
  children,
  color = "primary",
  size = "medium",
  disabled = false,
  ...rest
}: ButtonProps) => {
  let backgroundColor = "";
  let textColor = "";

  switch (color) {
    case "secondary":
      backgroundColor = "bg-gray-500 hover:bg-gray-600";
      textColor = "text-white";
      break;
    case "danger":
      backgroundColor = "bg-red-500 hover:bg-red-600";
      textColor = "text-white";
      break;
    default:
      backgroundColor = "bg-blue-500 hover:bg-blue-600";
      textColor = "text-white";
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case "small":
      sizeStyle = "py-5 px-8 text-sm";
      break;
    case "medium":
      sizeStyle = "py-8 px-10 text-base";
      break;
    case "large":
      sizeStyle = "py-10 px-14 text-lg";
      break;
    default:
      sizeStyle = "py-8 px-10 text-base";
      break;
  }

  return (
    <button
      className={`font-semibold rounded-md ${sizeStyle} ${backgroundColor} ${textColor} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
