import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import DetailedYogaPage from "./components/DetailedYogaPage"; // Import for yoga
import DetailedGymPage from "./components/DetailedGymPage"; // Correct import for gym
import YogaCameraPage from "./components/YogaCameraPage";
import GymCameraPage from "./components/GymCameraPage"; // Assuming you have a GymCameraPage
import Navbar from "./Navbar";

function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/try-yoga/:id" element={<DetailedYogaPage />} />
        <Route path="/try-gym/:id" element={<DetailedGymPage />} />
        <Route path="/yoga-camera" element={<YogaCameraPage />} />
        <Route path="/gym-camera" element={<GymCameraPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
