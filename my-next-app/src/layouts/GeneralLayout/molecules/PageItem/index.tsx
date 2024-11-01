import React, { FC, ReactNode, memo, useCallback } from "react";
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

  const navigateToPage = useCallback(() => {
    router.push(redirectUrl);
  }, [router, redirectUrl]);

  return (
    <Box
      onClick={navigateToPage}
      className={`relative w-full flex items-center p-2 mb-2 text-left cursor-pointer 
                  rounded-md shadow-sm shadow-orange-500 text-sm sm:text-base 
                  ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-100 text-gray-500"
                  }`}
      style={{
        height: "40px",
      }}
    >
      {icon}

      {!isCollapsed && (
        <span
          className={`absolute transition-opacity duration-300 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
          style={{
            left: "50%",
            transform: "translateX(-50%)", // Центриране на текста
            whiteSpace: "nowrap", // Предотвратява пренасяне на нов ред
            visibility: isCollapsed ? "hidden" : "visible",
          }}
        >
          {label}
        </span>
      )}
    </Box>
  );
};

export default memo(PageItem);
