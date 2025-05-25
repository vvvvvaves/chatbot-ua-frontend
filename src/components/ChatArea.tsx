import "./ChatArea.css";
import Button from "./Button";
import { FaRegPaperPlane, FaStop } from "react-icons/fa";
import { useState } from "react";
import UserSaid from "./UserSaid";
import BotSaid from "./BotSaid";

const defaultResponse = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.\n" +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.\n" +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.\n" +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.\n";
function ChatArea() {
  const [dialogue, setDialogue] = useState<{role: string, message: string}[]>([]);
  
  const [isConversing, setIsConversing] = useState(false);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const textArea = document.getElementById("text-area") as HTMLTextAreaElement;
      const userInput = textArea.value;
      textArea.value = "";
      if (/\S/.test(userInput)) {
        setIsConversing(true);
        // default response
        setDialogue([...dialogue, {role: "user", message: userInput}, {role: "assistant", message: defaultResponse}]);
        console.log(dialogue);
      }
    }
  };
  return <div className={isConversing ? "chat-area-conversing" : "chat-area"}>
    {isConversing && <div className="chat-area-dialogue">
      {dialogue.map((message, index) => (
        message.role === "user" ? <UserSaid message={message.message} /> : <BotSaid message={message.message} />
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
