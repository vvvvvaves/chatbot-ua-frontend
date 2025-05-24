import "./UserSaid.css";
interface Props {
  text: string;
}
function UserSaid({ text }: Props) {
  return (
    <div className="user-said">
      <p>{text}</p>
    </div>
  )
}

export default UserSaid
