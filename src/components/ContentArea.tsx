import "./ContentArea.css";
import RusorizIcon from "./icons/RusorizIcon";
import ComeBackAliveIconUA from "./icons/ComeBackAliveIconUA";
import ComeBackAliveIconEN from "./icons/ComeBackAliveIconEN";
import PrytulaIcon from "./icons/PrytulaIcon";
import FoundationsData from "./FoundationsData";

function ContentArea() {
  return (
    <div className="content-area">
      <h1>Допоможіть українській армії!</h1>
      <div className="body">
        <div className="wrapper-description">
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien
              vitae pellentesque sem placerat in id. Pretium tellus duis
              convallis tempus leo eu aenean. Urna tempor pulvinar vivamus
              fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Lorem ipsum dolor sit amet consectetur
              adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing
              elit. Ex sapien vitae pellentesque sem placerat in id. Pretium
              tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar
              vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada
              lacinia integer nunc posuere. Lorem ipsum dolor sit amet
              consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur
              adipiscing elit. Ex sapien vitae pellentesque sem placerat in id.
              Pretium tellus duis convallis
            </p>
          </div>
        </div>
        <div className="vl" />
        <div className="wrapper-foundations">
          <div className="foundations">
            <ul className="foundations-list">
              {FoundationsData.EN.map((item, index) => {
                return <li className="foundations-item">
                  {item.icon}
                </li>
              })}
            </ul>
            {/* <RusorizIcon className="rusoriz-icon" width={"150px"} height={"150px"} /> */}
            {/* <ComeBackAliveIconEN className="come-back-alive-icon-en" width={"150px"} height={"150px"} /> */}
            {/* <ComeBackAliveIconUA width={"150px"} height={"150px"} /> */}
            {/* <PrytulaIcon className="prytula-icon" width={"150px"} height={"150px"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
