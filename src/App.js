import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Chapter from "./pages/Chapter";
import Discussionist from "./pages/Discussionist";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="App text-white">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path="/discussionist/:name" element={<Discussionist />} />
      </Routes>
    </div>
  )
}