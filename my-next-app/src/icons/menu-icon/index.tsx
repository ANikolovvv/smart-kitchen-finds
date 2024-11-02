import React, { FC, memo } from "react";

type Props = {
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
};

const MenuIcon: FC<Props> = ({
  color = "#FFD700",
  size = 24,
  className = "",
  onClick,
}) => {
  return (
    <svg
      className={`cursor-pointer ${className}`}
      viewBox="0 0 512 512"
      fill={color}
      height={size}
      width={size}
      onClick={onClick}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M88 152h336M88 256h336M88 360h336"
      />
    </svg>
  );
};

export default memo(MenuIcon);
