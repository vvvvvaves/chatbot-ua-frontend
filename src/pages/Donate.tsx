import ChatBorder from "../components/ChatBorder";
import ContentArea from "../components/ContentArea";
import "./Donate.css";
function Donate() {
  return (
    <div className="donate">
      <ChatBorder className="chat-border-left" content="" />
      <ContentArea />
      <ChatBorder className="chat-border-right" content="" />
    </div>
  );
}

export default Donate;
