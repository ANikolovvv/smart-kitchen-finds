import React from "react";
import { pageNames } from "./pageNames";
import Box from "@/components/atoms/Box";
import { useRouter } from "next/router";
import PageItem from "../molecules/PageItem";

const NavigationBar: React.FC = () => {
  const router = useRouter();

  const pageItems = pageNames.map((page) => {
    const isActive = page.url === router.pathname;

    return (
      <PageItem
        key={page.url}
        label={page.name}
        isActive={isActive}
        aria-label={`${page.name} Page`}
        redirectUrl={page.url}
      />
    );
  });
  return (
    <nav className="bg-amber-50 border-b border-white-400">
      <Box className="container mx-auto flex justify-between items-center gap-2 p-4">
        {/* Лого, което променя размера на текста според екрана */}
        <Box className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">
          SmartifyTech
        </Box>

        <Box className="hidden md:flex space-x-4 lg:space-x-6">
          {pageItems}
        </Box>
      </Box>
    </nav>
  );
};

export default NavigationBar;
