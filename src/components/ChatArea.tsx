import "./ChatArea.css";
import Button from "./Button";
import { FaRegPaperPlane, FaStop } from "react-icons/fa";
import { useState } from "react";
function ChatArea() {
  const [isConversing, setIsConversing] = useState(false);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsConversing(true);
    }
  };
  return <div className={isConversing ? "chat-area-conversing" : "chat-area"}>
    {!isConversing && <h1>Вітаємо!</h1>}
    {!isConversing && <h2>Маєте питання стосовно життя у Польщі?</h2>}
    <div className="chat-input">
      <textarea placeholder={isConversing ? "Продовжіть розмову..." : "Чи можна виїжджати з Польщі в процесі отримання карти побиту?.."} className="text-area" onKeyDown={handleKeyDown}>
    </textarea>
      <Button className="send-button" iconTrue={<FaRegPaperPlane className="send-icon" />} iconFalse={<FaStop className="stop-icon" />} />
    </div>
  </div>;
}

export default ChatArea;
