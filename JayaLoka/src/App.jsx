import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Index from "./pages/Index.jsx"
import Favorite from "./pages/Favorite.jsx"
import Feedback from "./pages/Feedback.jsx"
import Map from "./pages/Map.jsx"
import Search from "./pages/Search.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Index />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </Router>
   
  
  );

}

export default App