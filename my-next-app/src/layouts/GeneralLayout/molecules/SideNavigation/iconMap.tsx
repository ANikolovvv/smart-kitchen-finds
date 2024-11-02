import BlogIcon from "@/icons/blog-icon";
import CameraIcon from "@/icons/camera-icon";
import HomeIconFill from "@/icons/home-icon-fill";
import LightingIcon from "@/icons/lighting-icon";
import LocksSecurityIcon from "@/icons/locks-security-icon";
import SpeakersIcon from "@/icons/speakers-icon";
import ThermostatsIcon from "@/icons/thermostats-icon";
import { ReactNode } from "react";

type Icon = {
  [key in string]: ReactNode;
};

export const icons: Icon = {
  "Smart Home": <HomeIconFill />,
  Speakers: <SpeakersIcon />,
  Thermostats: <ThermostatsIcon />,
  Lighting: <LightingIcon />,
  Cameras: <CameraIcon />,
  Blog: <BlogIcon />,
  "Locks & Security": <LocksSecurityIcon />,
};
