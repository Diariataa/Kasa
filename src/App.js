import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/normalize.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/errorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Apartments from "./pages/Apartments";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/apartment/:id" element={<Apartments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
