import "./ContentArea.css";

interface Props {
  header: string;
  description: React.ReactNode;
  data: {
    title: string;
    link: string;
    icon: React.ReactNode;
  }[];
}

function ContentArea({ header, description, data }: Props) {
  return (
    <div className="content-area">
      <h1>{header}</h1>
      <div className="body">
        <div className="wrapper-description">
          <div className="description">
            {description}
          </div>
        </div>
        <div className="vl" />
        <div className="wrapper-data">
          <div className="data">
            <div className="data-grid">
              {data.map((item, index) => {
                return <div className="data-item"><a href={item.link}>{item.icon}</a></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
