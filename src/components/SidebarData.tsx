import { LuSettings, LuInfo } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";

const SidebarData = [
  {
    title: "Donate",
    icon: <GoHeartFill className="donate-icon" size={"2rem"} />,
    path: "/donate",
    cName: "sidebar-list-item",
  },
  {
    title: "Change Mode",
    icon: <FaRegLightbulb className="dark-mode-icon" size={"2rem"} />,
    path: "/",
    cName: "sidebar-list-item",
  },
  {
    title: "About Us",
    icon: <LuInfo className="info-icon" size={"2rem"} />,
    path: "/about",
    cName: "sidebar-list-item",
  },
  {
    title: "Settings",
    icon: <LuSettings className="settings-icon" size={"2rem"}></LuSettings>,
    path: "/settings",
    cName: "sidebar-list-item",
  },
];

export default SidebarData;
