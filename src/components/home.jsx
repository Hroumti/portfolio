import Hero from "./hero";
import About from "./about";
import '../styles/home.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
