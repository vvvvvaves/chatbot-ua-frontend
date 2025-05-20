import "./ContentArea.css";
import RusorizIcon from "./icons/RusorizIcon";
import ComeBackAliveIconUA from "./icons/ComeBackAliveIconUA";
import ComeBackAliveIconEN from "./icons/ComeBackAliveIconEn";
import PrytulaIcon from "./icons/PrytulaIcon";
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
            <RusorizIcon />
            <ComeBackAliveIconEN />
            {/* <ComeBackAliveIconUA /> */}
            {/* <PrytulaIcon /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
