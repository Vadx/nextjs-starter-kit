import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  customClass?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  color = "primary",
  size = "medium",
  disabled = false,
  customClass = "",
  onClick,
  ...rest
}: ButtonProps) => {
  let backgroundColor = "";
  let textColor = "";

  switch (color) {
    case "primary":
      backgroundColor = "bg-primary hover:bg-primary-hover";
      textColor = "text-white";
      break;
    case "secondary":
      backgroundColor = "bg-secondary hover:bg-secondary-hover";
      textColor = "text-white";
      break;
    case "danger":
      backgroundColor = "bg-danger hover:bg-danger-hover";
      textColor = "text-white";
      break;
    default:
      backgroundColor = "bg-primary hover:bg-primary-hover";
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
      className={`font-semibold rounded-md ${customClass} ${sizeStyle} ${backgroundColor} ${textColor} ${
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
