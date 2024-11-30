import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ReportLostId from "./components/ReportLostId";
import ReportFoundId from "./components/ReportFoundId";
import Login from "./components/Login";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/lost" element={<ReportLostId />}></Route>
          <Route path="/found" element={<ReportFoundId />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
