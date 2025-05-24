interface Props {
  fill0?: string;
  fill1?: string;
  fill2?: string;
  fill3?: string;
  fill4?: string;
  fill5?: string;
  className?: string;
  width?: string;
  height?: string;
}

function InsightEN(props: Props) {
  let fill0 = props.fill0 || "#E30413";
  let fill1 = props.fill1 || "#F18700";
  let fill2 = props.fill2 || "#FFD500";
  let fill3 = props.fill3 || "#009640";
  let fill4 = props.fill4 || "#009FE3";
  let fill5 = props.fill5 || "#951B81";
  let className = props.className || "";
  let width = props.width || "49.5";
  let height = props.height || "49.5";

  return (
    <svg
      viewBox="620 0 380 161"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <path
        d="M665.496 157.729H631.287L784.394 26.4424L799.002 43.6391L665.496 157.729Z"
        fill={fill0}
      />
      <path
        d="M755.547 157.729H728.55L784.394 26.4424L799.002 43.6391L755.547 157.729Z"
        fill={fill1}
      />
      <path
        d="M755.547 157.729H728.55L909.209 0L926.775 13.1287L755.547 157.729Z"
        fill={fill2}
      />
      <path
        d="M863.536 157.729H835.984L909.209 0L926.775 13.1287L863.536 157.729Z"
        fill={fill3}
      />
      <path
        d="M863.536 157.729H835.984L984.098 64.9038L1000 78.5872L863.536 157.729Z"
        fill={fill4}
      />
      <path
        d="M968.75 157.729H946.191L984.098 64.9038L1000 78.5872L968.75 157.729Z"
        fill={fill5}
      />
    </svg>
  );
}

export default InsightEN;