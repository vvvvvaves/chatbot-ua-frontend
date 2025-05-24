interface Props {
  fill0?: string;
  fill1?: string;
  className?: string;
  width?: string;
  height?: string;
}

function DobrobatEN(props: Props) {
  let fill0 = props.fill0 || "#fdc300";
  let className = props.className || "";
  let width = props.width || "49.5";
  let height = props.height || "49.5";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49.5 49.5"
      className={className}
      width={width}
      height={height}
    >
      <path
        d="M22.21,32.35h5.07l6.19,10.73h-2.66v3.21h-4.46v-3.21h-3.21v3.21h-4.46v-3.21h-2.66l6.19-10.73Zm10.13-5.06v-5.07l10.73-6.19v2.66h3.21v4.46h-3.21v3.21h3.21v4.46h-3.21v2.66l-10.73-6.19Zm-3.21,1.85h0Zm0,0h0Zm-1.85-11.98h-5.07l-6.19-10.73h2.66V3.21h4.46v3.21h3.21V3.21h4.46v3.21h2.66l-6.19,10.73Zm-10.13,5.06v5.07l-10.73,6.19v-2.66H3.21v-4.46h3.21v-3.21H3.21v-4.46h3.21v-2.66l10.73,6.19Zm3.21-1.85h8.76v8.76h-8.76v-8.76Zm0,0h0Zm0,8.76h0l-9.9,17.16h5.01v3.21h18.56v-3.21h5.01l-9.9-17.15,17.15,9.9v-5.01h3.21V15.47h-3.21v-5.01l-17.15,9.9h0L39.03,3.21h-5.01V0H15.47V3.21h-5.01l9.9,17.15L3.21,10.46v5.01H0v18.56H3.21v5.01l17.15-9.9Z"
        fill={fill0}
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default DobrobatEN;
