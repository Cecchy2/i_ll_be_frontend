import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Lateral from "./components/Lateral";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex">
          <Lateral className="lateral-fixed" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
