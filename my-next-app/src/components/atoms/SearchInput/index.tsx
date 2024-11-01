import React, { FC, memo } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons/search-icon";
import Box from "../Box";

type SearchProps = {
  isCollapsed: boolean; // пропс, който определя дали е „collapsed“
};

const SearchInput: FC<SearchProps> = ({ isCollapsed }) => {
  const styles = {
    label: "text-black",
    input: [
      "bg-transparent",
      "text-black",
      "text-sm",
      "sm:text-base",
      "placeholder:text-black",
      "rounded-md",
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
      "h-10",
    ],
  };

  return (
    <Box className="flex w-full items-center p-3 gap-2 bg-white">
      <Input
        classNames={styles}
        placeholder={isCollapsed ? "" : "Type to search..."}
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
