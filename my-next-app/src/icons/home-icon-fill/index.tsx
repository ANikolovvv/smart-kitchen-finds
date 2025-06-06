import React, { FC, memo } from "react";

type Props = {
  color?: string;
  size?: number;
};

const HomeIconFill: FC<Props> = ({ color = "#FFD700", size = 24 }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} height={size} width={size}>
      <path d="M12 3L2 12h3v8h14v-8h3L12 3m0 5.5c2.34 0 4.46.93 6 2.44l-1.2 1.18a6.787 6.787 0 00-4.8-1.95c-1.88 0-3.58.74-4.8 1.95L6 10.94a8.541 8.541 0 016-2.44m0 3.33c1.4 0 2.67.56 3.6 1.47l-1.2 1.17a3.41 3.41 0 00-2.4-.97c-.94 0-1.79.37-2.4.97L8.4 13.3a5.13 5.13 0 013.6-1.47m0 3.34c.94 0 1.7.74 1.7 1.66 0 .92-.76 1.67-1.7 1.67s-1.7-.75-1.7-1.67c0-.92.76-1.66 1.7-1.66z" />
    </svg>
  );
};

export default memo(HomeIconFill);
