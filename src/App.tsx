import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatBorder from "./components/ChatBorder";


function App() {
  return (
    <>
    <div className="app">
      <Sidebar />
      <ChatBorder className="chat-border-left" content=""/>
      <ChatArea></ChatArea>
      <ChatBorder className="chat-border-right" content=""/>
    </div>
    
    </>
  );
}

export default App;
