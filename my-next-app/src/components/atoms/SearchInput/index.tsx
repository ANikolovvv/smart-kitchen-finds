import { memo } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons/search-icon";
import Box from "../Box";

const SearchInput = () => {
  return (
    <Box className="flex w-full flex-wrap md:flex-nowrap items-center p-2.5">
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[12rem] h-8 hover:bg-white",
          mainWrapper: "h-full hover:bg-white",
          input: "text-small hover:bg-white",
          inputWrapper:
            "h-full font-normal text-black bg-orange-100 hover:bg-gray-200", // Ensures hover is white
        }}
        placeholder="Type to search..."
        size="md"
        startContent={<SearchIcon size={16} />}
        type="search"
       
      />
    </Box>
  );
};

export default memo(SearchInput);
