import React, { FC, memo, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons/search-icon";
import Box from "../Box";

type SearchProps = {
  isCollapsed: boolean;
  isDark?: boolean;
};

const SearchInput: FC<SearchProps> = ({ isCollapsed, isDark = false }) => {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);

  const styles = {
    label: `${isDark ? "text-gray-400" : "text-gray-500"} 
      text-[10px] 
      xs:text-xs 
      sm:text-sm 
      md:text-base 
      lg:text-lg`,
    input: [
      "bg-transparent",
      isDark ? "text-white" : "text-black",
      "text-[11px]",
      "xs:text-xs",
      "sm:text-sm",
      "md:text-base",
      "lg:text-lg",
      isDark ? "placeholder:text-gray-400" : "placeholder:text-gray-500",
      "rounded-md",
      "text-center",
      "w-full",
      "px-1",
      "xs:px-2",
      "sm:px-3",
      "md:px-4",
      "lg:px-5"
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-sm",
      "shadow-orange-500",
      isDark ? "bg-[rgb(18,18,18)]" : "bg-white",
      isDark ? "hover:bg-gray-800" : "hover:bg-orange-100",
      isDark ? "focus-within:bg-gray-800" : "focus-within:bg-orange-100",
      "!cursor-text",
      "rounded-md",
      "h-6",
      "xs:h-7",
      "sm:h-8",
      "md:h-9",
      "lg:h-10",
      "w-full",
    ],
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isCollapsed) {
      timeout = setTimeout(() => {
        setIsPlaceholderVisible(true);
      }, 300);
    } else {
      setIsPlaceholderVisible(false);
    }
    return () => clearTimeout(timeout);
  }, [isCollapsed]);

  return (
    <Box className={`
      flex w-full items-center 
      gap-0.5
      xs:gap-1 
      sm:gap-2 
      md:gap-2.5
      lg:gap-3
      p-1.5
      xs:p-2 
      sm:p-2.5 
      md:p-3
      lg:p-4 
      ${isDark ? 'bg-[rgb(18,18,18)]' : 'bg-white'}
    `}>
      <Input
        classNames={styles}
        placeholder={isPlaceholderVisible ? "Type to search..." : ""}
        size="sm"
        startContent={
          <Box className="rounded-md flex justify-center items-center h-full">
            <SearchIcon 
              className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl" 
              size={12} 
              style={{
                width: 'clamp(12px, 2vw, 24px)',
                height: 'clamp(12px, 2vw, 24px)'
              }}
            />
          </Box>
        }
        type="search"
      />
    </Box>
  );
};

export default memo(SearchInput);

