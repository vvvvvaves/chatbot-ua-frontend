import { LuArrowLeftToLine, LuSettings, LuInfo } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="open-sidebar-icon">
        <LuArrowLeftToLine size={"2rem"} />
      </div>
      <div className="chat-history"></div>
      <div className="donate-icon">
      <GoHeartFill size={"2rem"}/>
      </div>
      <div className="dark-mode-icon">
        <FaRegLightbulb size={"2rem"}/>
      </div>
      <div className="info-icon">
        <LuInfo size={"2rem"}/>
      </div>
      <div className="settings-icon">
        <LuSettings size={"2rem"}></LuSettings>
      </div>
    </div>
  );
}

export default Sidebar;
