import React from "react";
import { pageNames } from "../GeneralLayout/molecules/SideNavigation/pageNames";
import Box from "@/components/atoms/Box";
import { useRouter } from "next/router";
import PageItem from "../GeneralLayout/molecules/PageItem";
import { icons } from "../GeneralLayout/molecules/SideNavigation/iconMap";

const NavigationBar: React.FC = () => {
  const router = useRouter();

  const pageItems = pageNames.map((page) => {
    const isActive = page.url === router.pathname;
    const icon = icons[page.label];

    return (
      <PageItem
        key={page.url}
        label={page.label}
        isActive={isActive}
        icon={icon}
        aria-label={`${page.label} Page`}
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

        <Box className="hidden md:flex space-x-4 lg:space-x-6">{pageItems}</Box>
      </Box>
    </nav>
  );
};

export default NavigationBar;
