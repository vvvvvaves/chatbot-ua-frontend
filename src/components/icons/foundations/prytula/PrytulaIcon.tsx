interface Props {
  className?: string;
  fill0?: string;
  fill1?: string;
  width?: string;
  height?: string;
}

function PrytulaIcon(props: Props) {
    let fill0 = props.fill0 || "#FFA400";
    let fill1 = props.fill1 || "#001E61";
    let className = props.className || "";
    let width = props.width || "400";
    let height = props.height || "400";
  return (
    <svg width={width} height={height} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M400 166.67H0V233.34H400V166.67Z" fill={fill0}/>
<path d="M400 0H333.33V166.67H400V0Z" fill={fill1}/>
<path d="M400 233.33H333.33V400H400V233.33Z" fill={fill1}/>
<path d="M400 0H166.67V333.33H233.33V66.67H400V0Z" fill={fill1}/>
<path d="M66.67 333.33V166.67H0V400H333.33V333.33H66.67Z" fill={fill0}/>
</svg>

  )
}

export default PrytulaIcon
