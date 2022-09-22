import React from "react";
import { FaDesktop, FaPaintBrush, FaChartBar } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Development",
    path: "/development",
    icon: <FaDesktop />,
    className: "nav-text",
  },
  {
    title: "Design",
    path: "/Design",
    icon: <FaPaintBrush />,
    className: "nav-text",
  },
  {
    title: "Marketing",
    path: "/Marketing",
    icon: <FaChartBar />,
    className: "nav-text",
  },
];
