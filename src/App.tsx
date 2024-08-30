import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindPassPage from "./pages/FindPassPage";
// import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/findpassword" element={<FindPassPage />} />
    </Routes>
  );
}

export default App;
