import ChatArea from "../components/ChatArea";
import ChatBorder from "../components/ChatBorder";
import "./ChatPage.css";

function ChatPage() {
  return (
    <div className="chat-page">
      <ChatBorder className="chat-border-left" content="" />
      <ChatArea></ChatArea>
      <ChatBorder className="chat-border-right" content="" />
    </div>
  );
}

export default ChatPage;
