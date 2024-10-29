import React, { FC, memo } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/router";

import Box from "@/components/atoms/Box";
import { pageNames } from "./pageNames";
import { icons } from "./iconMap";
import PageItem from "../PageItem";

import SearchInput from "@/components/atoms/SearchInput";
import MenuIcon from "@/icons/menu-icon";
import styles from "./SideNavigation.module.css";

const SideNavigation: FC = () => {
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
    <Card
      className="h-full w-full px-5 flex flex-col justify-items-start rounded-xl"
      style={{ boxShadow: "0 4px 20px rgba(255, 165, 0, 0.5)" }}
    >
      <CardHeader className="flex items-center justify-between text-orange-500 font-bold">
        SmartifyTech
        {/* Меню иконата се показва само на мобилни устройства и таблети */}
        <MenuIcon className="block md:hidden" />
      </CardHeader>

      <SearchInput />
      <CardBody className="w-full mt-5 flex-grow justify-between">
        <Box className="flex flex-col gap-2">{pageItems}</Box>
      </CardBody>
    </Card>
  );
};

export default memo(SideNavigation);
