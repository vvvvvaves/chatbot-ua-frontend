import "./ChatArea.css";
import Button from "./Button";
import { FaRegPaperPlane, FaStop } from "react-icons/fa";
function ChatArea() {
  return <div className="chat-area">
    <h1>Вітаємо!</h1>
    {/* <h2 className="greeting-h2">Цей чат відповідає на питання щодо життя та легалізації українців у Польщі</h2> */}
    <h2>Маєте питання стосовно життя у Польщі?</h2>
    <div className="chat-input">
      <textarea placeholder={"Чи можна виїжджати з Польщі в процесі отримання карти побиту?.."} className="text-area">
    </textarea>
      <Button className="send-button" iconTrue={<FaRegPaperPlane className="send-icon" />} iconFalse={<FaStop className="stop-icon" />} />
    </div>
  </div>;
}

export default ChatArea;
