import React, { FC, ReactNode, memo } from "react";
import { useRouter } from "next/router";
import Box from "@/components/atoms/Box";

type Props = {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  redirectUrl: string;
  isCollapsed: boolean;
};

const PageItem: FC<Props> = ({
  label,
  isActive,
  icon,
  redirectUrl,
  isCollapsed,
}) => {
  const router = useRouter();

  const hoverColor = isActive ? "" : "hover:bg-orange-100";
  const backgroundColor = isActive ? "bg-orange-500" : "";
  const textColor = isActive ? "text-white" : "text-gray-500";
  const navigateToPage = () => {
    router.push(redirectUrl);
  };

  return (
    <Box
      onClick={navigateToPage}
      className={`w-full flex items-center gap-2 text-left cursor-pointer mb-2 
                p-2 rounded-md shadow-sm shadow-orange-500 text-sm sm:text-base 
                ${hoverColor} ${textColor} ${backgroundColor} `}
    >
      {icon}
      {!isCollapsed && label}
    </Box>
  );
};

export default memo(PageItem);
