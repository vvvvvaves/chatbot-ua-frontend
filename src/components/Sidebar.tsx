import { LuArrowLeftToLine } from "react-icons/lu";
import { useState } from 'react';
import SidebarData from './SidebarData'
import { Link } from 'react-router-dom'


import "./Sidebar.css";

function Sidebar() {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => { setSidebar(sidebar => !sidebar) }

  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="open-sidebar-icon" onClick={showSidebar}>
        <LuArrowLeftToLine size={"2rem"} />
      </div>
      <div className="chat-history"></div>
      <ul className="sidebar-list">
      {SidebarData.map((item, index) => {
        return (<li key={index} className={item.cName}>
           {item.icon}
           {sidebar && <span className= "sidebar-text">{item.title}</span>}
        </li>);
      })}
      </ul>
    </div>
  );
}

export default Sidebar;
