import React, { FC, memo, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons/search-icon";
import Box from "../Box";

type SearchProps = {
  isCollapsed: boolean; 
};

const SearchInput: FC<SearchProps> = ({ isCollapsed }) => {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(false);

  const styles = {
    label: "text-gray-500",
    input: [
      "bg-transparent",
      "text-black",
      "text-sm",
      "sm:text-base",
      "placeholder:text-gray-500",
      "rounded-md",
      "text-center",
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-sm",
      "shadow-orange-500",
      "bg-white",
      "hover:bg-orange-100",
      "focus-within:bg-orange-100",
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
    <Box className="flex w-full items-center p-3 gap-2 bg-white">
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

