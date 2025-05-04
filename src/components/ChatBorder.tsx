import "./ChatBorder.css";

interface Props {
    className: string;
  content: string;
}

function ChatBorder({ className, content }: Props) {
  return <div className={className}></div>;
}

export default ChatBorder;
