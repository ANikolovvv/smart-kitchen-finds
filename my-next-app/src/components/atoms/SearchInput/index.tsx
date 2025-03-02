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
    label: isDark ? "text-gray-400" : "text-gray-500",
    input: [
      "bg-transparent",
      isDark ? "text-white" : "text-black",
      "text-sm",
      "sm:text-base",
      isDark ? "placeholder:text-gray-400" : "placeholder:text-gray-500",
      "rounded-md",
      "text-center",
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
      "h-9",
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
    <Box className={`flex w-full items-center p-3 gap-2 ${isDark ? 'bg-[rgb(18,18,18)]' : 'bg-white'}`}>
      <Input
        classNames={styles}
        placeholder={isPlaceholderVisible ? "Type to search..." : ""}
        size="sm"
        startContent={
          <Box className="rounded-md flex justify-center items-center h-full">
            <SearchIcon className="text-base md:text-lg" size={16} />
          </Box>
        }
        type="search"
      />
    </Box>
  );
};

export default memo(SearchInput);

