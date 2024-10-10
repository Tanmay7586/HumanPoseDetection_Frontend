import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import DetailedYogaPage from "./components/DetailedYogaPage";
import YogaCameraPage from "./components/YogaCameraPage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/try-yoga/:id" element={<DetailedYogaPage />} />
        <Route path="/yoga-camera" element={<YogaCameraPage/>} />
      </Routes>
    </div>
  );
}

export default App;
