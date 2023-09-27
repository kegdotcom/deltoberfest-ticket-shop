import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Info from "./pages/Info";
import Images from "./pages/Images";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gallery" element={<Images />} />
      </Routes>
    </>
  );
}

export default App;
