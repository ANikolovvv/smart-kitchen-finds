import React, { FC, memo, useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import Box from "@/components/atoms/Box";
import { pageNames } from "./pageNames";
import { icons } from "./iconMap";
import PageItem from "../PageItem";
import SearchInput from "@/components/atoms/SearchInput";
import MenuIcon from "@/icons/menu-icon";
import { SunIcon } from "@/icons/sun-icon";
import { MoonIcon } from "@/icons/moon-icon";

type SideNavigationProps = {
  isCollapsed: boolean;
  toggleNavigation: () => void;
};

const SideNavigation: FC<SideNavigationProps> = ({
  isCollapsed,
  toggleNavigation,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme logic runs only after client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

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
        isCollapsed={isCollapsed}
      />
    );
  });

  return (
    <Card
    className={`w-full flex flex-col justify-items-start rounded-xl transition-all duration-300 ${
      isDark
        ? "text-white shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
        : "bg-white text-gray-900 shadow-[0_4px_20px_rgba(255,165,0,0.5)]"
    }`}
    style={isDark ? { backgroundColor: "rgb(18, 18, 18)" } : undefined}
    >
      <CardHeader
        className={`px-6 py-4 flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed && (
          <span
            className={`font-bold text-xl ${
              isDark ? "text-orange-400" : "text-orange-500"
            }`}
          >
            SmartifyTech
          </span>
        )}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "hover:bg-gray-800 text-orange-400"
                : "hover:bg-gray-100 text-orange-500"
            }`}
          >
            {/* Render a fallback icon (e.g., MoonIcon) until mounted, then switch based on theme */}
            {mounted ? isDark ? <SunIcon /> : <MoonIcon /> : <MoonIcon />}
          </button>
          <MenuIcon
            className={`block md:hidden ${
              isDark ? "text-orange-400" : "text-orange-500"
            }`}
            onClick={toggleNavigation}
          />
        </div>
      </CardHeader>

      <div className="px-6">
        <SearchInput isCollapsed={isCollapsed} isDark={isDark} />
      </div>

      <CardBody className="w-full mt-5 px-6 overflow-hidden">
        <Box className="flex flex-col gap-2 w-full">{pageItems}</Box>
      </CardBody>
    </Card>
  );
};

export default memo(SideNavigation);
