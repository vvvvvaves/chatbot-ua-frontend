import { LuArrowLeftToLine } from "react-icons/lu";
import { useState } from "react";
import SidebarData from "./SidebarData";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((sidebar) => !sidebar);
  };

  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="open-sidebar-icon" onClick={showSidebar}>
        <LuArrowLeftToLine size={"2rem"} />
      </div>
      <div className="chat-history"></div>
      <ul className="sidebar-list">
        {SidebarData.map((item, index) => {
          return (
            <NavLink to={item.path} end>
            <li key={index} className={item.cName}>
              {item.icon}
              <span className="sidebar-text">{item.title}</span>
            </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
