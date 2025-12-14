import Hero from "./hero";
import About from "./about";
import '../styles/home.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./projects";
import Obarakat from "./obarakat";
import BIMApp from "./bimApp";
import ContactForm from "./contact";
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/obarakat" element={<Obarakat />} />
        <Route path="/bimapp" element={<BIMApp />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}
