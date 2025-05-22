interface Props {
  width?: string;
  height?: string;
  className?: string;
}
function HospitallersIcon(props: Props) {
  return (
    <img src={"src/components/icons/foundations/hospitallers/Hospitallers.png"} className={props.className} alt="HospitallersIcon" width={props.width || "auto"} height={props.height || "150px"} />
  )
}

export default HospitallersIcon
