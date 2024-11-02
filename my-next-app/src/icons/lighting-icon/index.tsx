import React, { FC, memo } from "react";

type Props = {
  color?: string;
  size?: number;
};

const LightingIcon: FC<Props> = ({ color = "#FFD700", size = 24 }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} height={size} width={size}>
      <path d="M12 3L2 12h3v8h14v-8h3m-9 6h-2v-1h2m.5-2.42V16h-3v-1.42a3 3 0 113 0z" />
    </svg>
  );
};

export default memo(LightingIcon);