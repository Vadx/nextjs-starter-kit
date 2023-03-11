import React from "react";

interface HeadlineProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "center" | "inherit" | "justify" | "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const Headline = ({
  variant = "h6",
  align = "inherit",
  className = "",
  children,
}: HeadlineProps) => {
  let Tag: keyof JSX.IntrinsicElements = variant;

  switch (variant) {
    case "h1":
      Tag = "h1";
      className += " m-0 text-48 font-semibold leading-125";
      break;
    case "h2":
      Tag = "h2";
      className += " m-0 text-36 font-semibold leading-125";
      break;
    case "h3":
      Tag = "h3";
      className += " m-0 text-30 font-semibold leading-125";
      break;
    case "h4":
      Tag = "h4";
      className += " text-24 font-semibold leading-135";
      break;
    case "h5":
      Tag = "h5";
      className += " text-20 font-semibold leading-125";
      break;
    case "h6":
      Tag = "h6";
      className += " text-14 font-semibold leading-125";
      break;
    default:
      break;
  }

  switch (align) {
    case "center":
      className += " text-center";
      break;
    case "inherit":
      className += " text-inherit";
      break;
    case "justify":
      className += " text-justify";
      break;
    case "left":
      className += " text-left";
      break;
    case "right":
      className += " text-right";
      break;
    default:
      break;
  }

  return <Tag className={className}>{children}</Tag>;
};

export default Headline;
