import React, { FC, memo } from "react";

type Props = {
  color?: string;
  size?: number;
};

const ThermostatsIcon: FC<Props> = ({ color = "#FFD700", size = 24 }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} height={size} width={size}>
      <path d="M16.95 16.95l-2.12-2.12C15.55 14.1 16 13.1 16 12c0-.74-.21-1.43-.57-2l2.17-2.19A6.86 6.86 0 0119 12c0 1.93-.78 3.68-2.05 4.95M12 5c1.57 0 3 .5 4.19 1.4L14 8.56c-.57-.35-1.26-.56-2-.56a4 4 0 00-4 4c0 1.1.45 2.1 1.17 2.83l-2.12 2.12A6.976 6.976 0 015 12a7 7 0 017-7m0-3A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z" />
    </svg>
  );
};

export default memo(ThermostatsIcon);
