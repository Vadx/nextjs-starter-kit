import React from "react";

interface DividerProps {
  align?: "left" | "center" | "right";
  vertical?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Divider = ({
  align = "center",
  vertical = false,
  children,
  className = "",
}: DividerProps) => {
  if (vertical) {
    className += " border-l";
  } else {
    className += " border-t";
  }

  switch (align) {
    case "left":
      className += " text-left";
      break;
    case "center":
      className += " text-center";
      break;
    case "right":
      className += " text-right";
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      {children && (
        <span className="inline-block bg-white px-3 font-medium text-gray-500">
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
