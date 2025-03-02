import { FC, memo, ReactNode } from "react";
import Box from "../Box";
import { useTheme } from 'next-themes';

type PageWrapperProps = {
  children: ReactNode;
   
};

const PageWrapper: FC<PageWrapperProps> = ({ children}) => {
  const { theme } = useTheme();

  return (
    <Box
      className="flex w-full font-serif p-4 rounded-lg shadow-lg"
      style={{
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        boxShadow: theme === 'dark' 
          ? "0 2px 15px rgba(255, 255, 255, 0.5)"
          : "0 2px 15px rgba(255, 165, 0, 0.5)",
      }}
    >
      <Box
        role="region"
        aria-labelledby="page-title"
        className="max-w-4xl mx-auto font-serif text-center pt-1 p-4 sm:p-6 md:p-8 md:pt-2"
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(PageWrapper);

