import React, { FC, ReactNode, memo, useState, useEffect } from "react";
import SideNavigation from "./molecules/SideNavigation";
import Box from "@/components/atoms/Box";

type Props = {
  children: ReactNode;
};

const GeneralLayout: FC<Props> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavigation = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
   
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="flex flex-col md:flex-row h-screen w-full">
      <Box
        className={`p-2 transition-all duration-100 ${
          isCollapsed
            ? "w-[120px]"
            : "w-full sm:w-1/4 md:w-1/3 lg:w-2/5 xl:w-1/4"
        }`}
      >
        <SideNavigation
          isCollapsed={isCollapsed}
          toggleNavigation={toggleNavigation}
        />
      </Box>

      <Box className="w-full sm:w-3/4 md:w-2/3 lg:w-4/5 xl:w-3/4 p-2 overflow-scroll">
        {children}
      </Box>
    </Box>
  );
};

export default memo(GeneralLayout);
