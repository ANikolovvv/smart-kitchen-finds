import React, { FC, ReactNode, memo } from "react";
import SideNavigation from "./molecules/SideNavigation";
import Box from "@/components/atoms/Box";


type Props = {
  children: ReactNode;
};

const GeneralLayout: FC<Props> = ({ children }) => {
  return (
    <Box className="flex flex-col md:flex-row h-screen w-full">
      <Box className="w-full sm:w-1/4 md:w-1/3 lg:w-1/5 xl:w-1/4 p-2">
        <SideNavigation />
      </Box>

      <Box className="w-full sm:w-3/4 md:w-2/3 lg:w-4/5 xl:w-3/4 p-2 overflow-scroll">
        {children}
      </Box>
    </Box>
  );
};

export default memo(GeneralLayout);
