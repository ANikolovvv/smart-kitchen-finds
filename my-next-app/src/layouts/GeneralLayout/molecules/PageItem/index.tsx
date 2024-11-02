import React, { FC, ReactNode, memo, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@/components/atoms/Box";

type Props = {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  redirectUrl: string;
  isCollapsed: boolean;
};

const PageItem: FC<Props> = ({ label, isActive, icon, redirectUrl, isCollapsed }) => {
  const router = useRouter();
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const navigateToPage = useCallback(() => {
    router.push(redirectUrl);
  }, [router, redirectUrl]);

  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isCollapsed) {
      timeout = setTimeout(() => setIsLabelVisible(true), 300); 
    } else {
      setIsLabelVisible(false);
    }
    return () => clearTimeout(timeout); 
  }, [isCollapsed]);

  return (
    <Box
      onClick={navigateToPage}
      className={`relative w-full flex items-center p-2 mb-2 text-left cursor-pointer 
                  rounded-md shadow-sm shadow-orange-500 text-sm sm:text-base 
                  ${isActive ? "bg-orange-500 text-white" : "hover:bg-orange-100 text-gray-500"}`}
      style={{
        height: "40px",
      }}
    >
      {icon}

      <span
        className={`absolute transition-opacity duration-300 ${
          isLabelVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          visibility: isLabelVisible ? "visible" : "hidden",
        }}
      >
        {label}
      </span>
    </Box>
  );
};

export default memo(PageItem);

