import React, { FC, memo } from "react";

type Props = {
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void; // Добавяне на onClick като опционален пропс
};

const MenuIcon: FC<Props> = ({ color = "#FFD700", size = 24, className = "", onClick }) => {
  return (
    <svg
      className={`cursor-pointer ${className}`}
      viewBox="0 0 24 24"
      fill={color}
      height={size}
      width={size}
      onClick={onClick} // Използване на onClick пропс
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20z" />
    </svg>
  );
};

export default memo(MenuIcon);
