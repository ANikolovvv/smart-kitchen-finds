import React, { FC, memo } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/router";

import Box from "@/components/atoms/Box";
import { pageNames } from "./pageNames";
import { icons } from "./iconMap";
import PageItem from "../PageItem";

import SearchInput from "@/components/atoms/SearchInput";

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
      className=" h-full px-4 flex justify-items-start"
      style={{ boxShadow: "0 4px 20px rgba(255, 165, 0, 0.5)" }}
    >
      <CardHeader className="text-lg text-orange-500 font-bold">
        SmartifyTech
      </CardHeader>
      <SearchInput />
      <CardBody className="w-full mt-5 justify-between">
        <Box className="gap-4">{pageItems}</Box>
      </CardBody>
    </Card>
  );
};

export default memo(SideNavigation);
