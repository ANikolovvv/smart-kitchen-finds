import HomeIconFill from "@/icons/home-icon-fill";
import { ReactNode } from "react";


type Icon = {
  [key in string]: ReactNode;
};

export const icons: Icon = {
  Home: <HomeIconFill />,
};
