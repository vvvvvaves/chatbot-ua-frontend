import { LuArrowLeftToLine, LuSettings, LuInfo } from "react-icons/lu";
import PowerGeneratorIcon from './icons/PowerGenerator'
import './Sidebar.css'


function Sidebar() {
  return <div className="sidebar">
    <div className="arrow-left-to-line-icon">
        <LuArrowLeftToLine size={"4vw"} />
    </div>
    <div className="chat-history"></div>
    <div className="power-generator-icon">
        {/* <PowerGeneratorIcon /> */}
    </div>

  </div>;
}

export default Sidebar;
