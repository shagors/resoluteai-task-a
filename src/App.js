import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components call
import { Header, Footer } from "./components";
// pages call
import { Home, Contact } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
