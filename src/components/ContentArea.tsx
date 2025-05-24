import "./ContentArea.css";
import FoundationsData from "./FoundationsData";
function ContentArea() {
  return (
    <div className="content-area">
      <h1>Help Ukraine!</h1>
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
            <div className="foundations-grid">
              {FoundationsData.EN.map((item, index) => {
                return <div className="foundations-item"><a href={item.link}>{item.icon}</a></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
