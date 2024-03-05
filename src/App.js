import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Chapter from "./pages/Chapter";
import Discussionist from "./pages/Discussionist";
import ScrollToTop from "./components/ScrollToTop";
import Section from "./pages/Section";

export default function App() {
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <div className="App text-white">
      <Navbar setSearchInputValue={setSearchInputValue} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search searchInputValue={searchInputValue} />} />
        <Route path="/chapter/:name" element={<Chapter />} />
        <Route path="/section/:id" element={<Section />} />
        <Route path="/discussionist/:name" element={<Discussionist />} />
      </Routes>
    </div>
  )
}