import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import HeroPage from "./components/main-page/heroPage";
import Yogas from "./components/yoga-poses/Yogas";

function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <HeroPage />
      <Yogas />
    </div>
  );
}

export default App;
