import HomeIconFill from "@/icons/home-icon-fill";
import { ReactNode } from "react";

type Icon = {
  [key in string]: ReactNode;
};

export const icons: Icon = {
  "Smart Home": <HomeIconFill />,
  Speakers: <HomeIconFill />,
  Thermostats: <HomeIconFill />,
  Lighting: <HomeIconFill />,
  Cameras: <HomeIconFill />,
  Blog: <HomeIconFill />,
  "Locks & Security": <HomeIconFill />,
};
