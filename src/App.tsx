import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindPassPage from "./pages/FindPassPage";
import MainPage from "./pages/MainPage";
import MypageContent from "./components/MypageContent";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/findpassword" element={<FindPassPage />} />
      <Route element={<MainPage />}>
        <Route path="/main" element={<MainContent />} />
        <Route path="/mypage" element={<MypageContent />} />
      </Route>
    </Routes>
  );
}

export default App;
