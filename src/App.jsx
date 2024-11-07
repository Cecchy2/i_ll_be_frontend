import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Calendar from "./components/Calendar";
import MyNavBar from "./components/MyNavBar";
import Lateral from "./components/Lateral";
import AmiciPage from "./components/AmiciPage";
import ChatPage from "./components/ChatPage";
import EventiPage from "./components/EventiPage";
import LoginPage from "./components/LoginPage";
import RegistrazionePage from "./components/RegistrazionePage";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <div className="d-flex">
        <Lateral />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/amici" element={<AmiciPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/eventi" element={<EventiPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrazione" element={<RegistrazionePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
