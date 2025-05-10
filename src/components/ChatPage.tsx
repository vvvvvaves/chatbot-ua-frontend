import ChatArea from "./ChatArea";
import ChatBorder from "./ChatBorder";
import './ChatPage.css'

function ChatPage() {
  return (
    <>
      <ChatBorder className="chat-border-left" content="" />
      <ChatArea></ChatArea>
      <ChatBorder className="chat-border-right" content="" />
    </>
  );
}

export default ChatPage
