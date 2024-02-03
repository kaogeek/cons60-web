import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Section from "./pages/Section";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/section/:id" element={<Section />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}