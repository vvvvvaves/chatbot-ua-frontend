import "./ChatArea.css";

function ChatArea() {
  return <div className="chat-area">
    <h1 className="greeting-h1">Вітаємо!</h1>
    <h2 className="greeting-h2">Цей чат відповідає на питання стосовно життя та легалізації українців у Польщі</h2>
    <input className="chat-input"/>
  </div>;
}

export default ChatArea;
