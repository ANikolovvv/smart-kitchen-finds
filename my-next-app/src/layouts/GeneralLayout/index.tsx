import React, { FC, ReactNode, memo } from "react";
import SideNavigation from "./molecules/SideNavigation";
import Box from "@/components/atoms/Box";

type Props = {
  children: ReactNode;
};

const GeneralLayout: FC<Props> = ({ children }) => {
  return (
    <Box className="flex h-screen w-full ">
      <Box className="w-1/5 p-3">
        <SideNavigation />
      </Box>
      <Box className="w-4/5 p-3 overflow-scroll">{children}</Box>
    </Box>
  );
};

export default memo(GeneralLayout);
