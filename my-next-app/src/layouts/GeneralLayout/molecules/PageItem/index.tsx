import React, { FC, ReactNode, memo } from "react";
import { useRouter } from "next/router";
import Box from "@/components/atoms/Box";

type Props = {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  redirectUrl: string;
};

const PageItem: FC<Props> = ({ label, isActive, icon, redirectUrl }) => {
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
    className={`w-full flex items-center gap-3 text-left cursor-pointer mb-2 ${hoverColor} ${textColor} p-3 rounded-md ${backgroundColor}`}
  >
    {icon}
    {label}
  </Box>
  );
};

export default memo(PageItem);
