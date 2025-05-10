import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Menu from "./Website/Pages/Menu";
import Chef from "./Website/Pages/Chef";
import Not from "./Website/Pages/Not";


function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/team" element={<Chef />} />


          {/* not found page */}
          <Route path="*" element={<Not />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
