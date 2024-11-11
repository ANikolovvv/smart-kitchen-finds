import React, { FC, ReactNode, memo, useState, useEffect } from "react";
import SideNavigation from "./molecules/SideNavigation";
import Box from "@/components/atoms/Box";
import Footer from "@/features/footer";

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
      } else {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="flex flex-col min-h-screen w-full font-serif">
      <Box
        className={`flex flex-grow justify-center relative${
          !isCollapsed ? "felx-col" : ""
        }`}
      >
        <Box
          className={`flex justify-center p-2 transition-all duration-100 h-full  ${
            isCollapsed
              ? "w-[120px] sm:top-0 sm:left-0 "
              : "w-full absolute z-40 sm:absolute sm:top-0 sm:left-0 sm:w-full sm:z-40 md:relative lg:relative xl:relative bg-white"
          } ${!isCollapsed ? "  md:w-1/3 lg:w-2/5 xl:w-1/4" : ""}`}
        >
          <SideNavigation
            isCollapsed={isCollapsed}
            toggleNavigation={toggleNavigation}
          />
        </Box>

        {/* Основно съдържание */}
        <Box className="w-full  flex justify-center items-center sm:w-3/4 md:w-2/3 lg:w-4/5 xl:w-3/4 p-2 ">
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default memo(GeneralLayout);
