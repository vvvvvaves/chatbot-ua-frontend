import ChatArea from "../components/ChatArea";
import ChatBorder from "../components/ChatBorder";
import "./ChatPage.css";

function ChatPage() {
  return (
    <>
      <ChatBorder className="chat-border-left" content="" />
      <ChatArea></ChatArea>
      <ChatBorder className="chat-border-right" content="" />
    </>
  );
}

export default ChatPage;
