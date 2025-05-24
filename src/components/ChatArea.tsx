import "./ChatArea.css";
import Button from "./Button";
import { FaRegPaperPlane, FaStop } from "react-icons/fa";
import { useState } from "react";
import UserSaid from "./UserSaid";
function ChatArea() {
  const [dialogue, setDialogue] = useState<string[]>([]);
  
  const [isConversing, setIsConversing] = useState(false);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const textArea = document.getElementById("text-area") as HTMLTextAreaElement;
      const userInput = textArea.value;
      textArea.value = "";
      if (/\S/.test(userInput)) {
        setIsConversing(true);
        setDialogue([...dialogue, userInput]);
        console.log(dialogue);
      }
    }
  };
  return <div className={isConversing ? "chat-area-conversing" : "chat-area"}>
    {isConversing && <div className="chat-area-dialogue">
      {dialogue.map((text, index) => (
        <UserSaid text={text} />
      ))}
    </div>}
    {!isConversing && <h1>Вітаємо!</h1>}
    {!isConversing && <h2>Маєте питання стосовно життя у Польщі?</h2>}
    <div className="chat-input">
      <textarea id="text-area" placeholder={isConversing ? "Продовжіть розмову..." : "Чи можна виїжджати з Польщі в процесі отримання карти побиту?.."} className="text-area" onKeyDown={handleKeyDown}>
    </textarea>
      <Button className="send-button" iconTrue={<FaRegPaperPlane className="send-icon" />} iconFalse={<FaStop className="stop-icon" />} />
    </div>
  </div>;
}

export default ChatArea;
