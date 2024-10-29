import { memo } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons/search-icon";
import Box from "../Box";

const SearchInput = () => {
  const styles = {
    label: "text-black ",
    input: [
      "bg-transparent",
      "text-black ",
      "placeholder:text-black",
      "rounded-md", // Добавя заоблени краища
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-sm",
      "shadow-orange-500",
      "bg-orange-100",
      "hover:bg-amber-100",
      "focus-within:bg-orange-100",
      "!cursor-text",
      "rounded-md", // Добавя заоблени краища
    ],
  };

  return (
    <Box className="flex w-full flex-wrap md:flex-nowrap items-center p-2.5">
      <Input
        classNames={styles}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={16} />}
        type="search"
      />
    </Box>
  );
};

export default memo(SearchInput);
