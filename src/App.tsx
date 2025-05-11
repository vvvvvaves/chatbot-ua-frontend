import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatPage from "./pages/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
