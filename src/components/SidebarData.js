import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Development",
    path: "/development",
    icon: <FaIcons.FaDesktop />,
    className: "nav-text",
  },
  {
    title: "Design",
    path: "/Design",
    icon: <FaIcons.FaPenPaintBrush />,
    className: "nav-text",
  },
  {
    title: "Marketing",
    path: "/Marketing",
    icon: <FaIcons.FaChartSimple />,
    className: "nav-text",
  },
];
