import React, { FC, memo } from "react";

type Props = {
  color?: string;
  size?: number;
};

const LocksSecurityIcon: FC<Props> = ({ color = "#FFD700", size = 24 }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} height={size} width={size}>
      <path d="M12 12h7c-.53 4.11-3.28 7.78-7 8.92V12H5V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.73 9 12 5.16-1.27 9-6.45 9-12V5l-9-4z" />
    </svg>
  );
};

export default memo(LocksSecurityIcon);
