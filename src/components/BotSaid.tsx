import "./BotSaid.css";

interface Props {
    message: string;
}

function BotSaid({message}: Props) {
  return (
    <div className="bot-said">
        <p>{message}</p>
    </div>
  )
}

export default BotSaid
