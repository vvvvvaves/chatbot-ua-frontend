import "./UserSaid.css";
interface Props {
  message: string;
}
function UserSaid({ message }: Props) {
  return (
    <div className="user-said">
      <p>{message}</p>
    </div>
  )
}

export default UserSaid
