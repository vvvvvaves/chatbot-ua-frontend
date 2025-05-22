interface Props {
  fill0?: string;
  fill1?: string;
  fill2?: string;
  fill3?: string;
  fill4?: string;
  fill5?: string;
  fill6?: string;
  className?: string;
  width?: string;
  height?: string;
}

function InsightUA(props: Props) {
  let fill0 = props.fill0 || "#000000";
  let fill1 = props.fill1 || "#E30413";
  let fill2 = props.fill2 || "#F18700";
  let fill3 = props.fill3 || "#FFD500";
  let fill4 = props.fill4 || "#009640";
  let fill5 = props.fill5 || "#009FE3";
  let fill6 = props.fill6 || "#951B81";
  let className = props.className || "";
  let width = props.width || "181.87";
  let height = props.height || "49.5";

  return (
    <svg
      viewBox="0 0 201 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <path
        d="M89.6472 11.5479V17.4203L93.8099 11.5479H89.6472Z"
        fill={fill0}
      />
      <path d="M4.68306 11.5479H0V32.1385H4.68306V11.5479Z" fill={fill0} />
      <path
        d="M14.0863 32.1385H9.44043V11.5479H14.0863V19.3901H24.679V11.5479H29.2877V32.1385H24.679V22.9953H14.0863V32.1385Z"
        fill={fill0}
      />
      <path
        d="M49.0979 25.597C47.9085 27.3438 45.9015 28.496 43.5972 28.496C39.9176 28.496 36.9442 25.5227 36.9442 21.8431C36.9442 18.1636 39.9176 15.1902 43.5972 15.1902C45.8644 15.1902 47.8714 16.3424 49.0979 18.0892L52.8518 15.5619C50.8076 12.7743 47.4254 10.9531 43.5972 10.9531C37.3531 10.9531 32.2983 15.822 32.2983 21.8059C32.2983 27.827 37.3531 32.6587 43.5972 32.6587C47.4254 32.6587 50.7704 30.8376 52.8518 28.05L49.0979 25.597Z"
        fill={fill0}
      />
      <path
        d="M103.287 32.1385H98.7531V17.2344C95.4824 22.252 91.9143 27.4182 88.3091 32.1385H82.1765V11.5479H86.7852V27.0837C90.6135 21.9547 94.3673 16.6769 97.7124 11.5479H103.325V32.1385H103.287Z"
        fill={fill0}
      />
      <path
        d="M111.873 32.1385V14.9301H106.187V11.5479H122.317V14.9301H116.593V32.1385H111.873Z"
        fill={fill0}
      />
      <path
        d="M62.3666 23.6643L65.9346 14.8557H66.8638L70.3203 23.6643H62.3666ZM70.3203 11.5479H62.5896L53.6694 32.1385H58.9472L61.0285 27.0094H71.6583L74.037 32.1385H79.2033L70.3203 11.5479Z"
        fill={fill0}
      />
      <path
        d="M133.765 32.1384H126.889L157.663 5.74976L160.599 9.2063L133.765 32.1384Z"
        fill={fill1}
      />
      <path
        d="M151.865 32.1384H146.439L157.663 5.74976L160.599 9.2063L151.865 32.1384Z"
        fill={fill2}
      />
      <path
        d="M151.865 32.1384H146.439L182.751 0.434814L186.282 3.07368L151.865 32.1384Z"
        fill={fill3}
      />
      <path
        d="M173.571 32.1384H168.033L182.751 0.434814L186.282 3.07368L173.571 32.1384Z"
        fill={fill4}
      />
      <path
        d="M173.571 32.1384H168.033L197.804 13.4805L201 16.2308L173.571 32.1384Z"
        fill={fill5}
      />
      <path
        d="M194.719 32.1384H190.184L197.804 13.4805L201 16.2308L194.719 32.1384Z"
        fill={fill6}
      />
    </svg>
  );
}

export default InsightUA;
