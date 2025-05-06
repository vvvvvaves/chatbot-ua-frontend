import "./ChatArea.css";

function ChatArea() {
  return <div className="chat-area">
    <h1 className="greeting-h1">Вітаємо!</h1>
    {/* <h2 className="greeting-h2">Цей чат відповідає на питання щодо життя та легалізації українців у Польщі</h2> */}
    <h2 className="greeting-h2">Маєте питання стосовно життя у Польщі?</h2>
    <textarea placeholder={"Чи можна виїжджати з Польщі в процесі отримання карти побиту?.."} className="chat-input" />
  </div>;
}

export default ChatArea;
