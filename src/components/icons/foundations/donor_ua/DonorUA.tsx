interface Props {
  width?: string;
  height?: string;
  className?: string;
}
function DonorUA(props: Props) {
  return (
    <img src={"src/components/icons/foundations/donor_ua/DonorUA.png"} className={props.className} alt="DonorUA" width={props.width || "auto"} height={props.height || "150px"} />
  )
}

export default DonorUA
