import Box from "@/components/atoms/Box";
import React, { FC, ReactNode, memo } from "react";



type Props = {
  children: ReactNode;
};

const GeneralLayout: FC<Props> = ({ children }) => {
  return (
    <Box className="flex h-screen w-full bg-slate-100">
      <Box className="w-1/5 p-3">
      </Box>
      <Box className="w-4/5 p-3 overflow-scroll">{children}</Box>
    </Box>
  );
};

export default memo(GeneralLayout);