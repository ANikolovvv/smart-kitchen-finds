import React, { FC, ReactNode, memo } from "react";
import { useRouter } from "next/router";
import Box from "@/components/atoms/Box";

type Props = {
  label: string;
  isActive: boolean;
  redirectUrl: string;
};

const PageItem: FC<Props> = ({ label, isActive, redirectUrl }) => {
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
      className={`flex items-center gap-2 text-left cursor-pointer mb-1 p-3 rounded-md 
    ${hoverColor} ${textColor} ${backgroundColor} 
    transition-colors duration-300 ease-in-out hover:shadow-lg 
    sm:text-sm md:text-base lg:text-lg xl:text-xl 
    sm:p-2 md:p-3 lg:p-4 
    sm:gap-2 md:gap-4 lg:gap-6`}
    >
      {label}
    </Box>
  );
};

export default memo(PageItem);
