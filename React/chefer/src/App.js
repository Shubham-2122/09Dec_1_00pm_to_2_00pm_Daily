import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Menu from "./Website/Pages/Menu";
import Chef from "./Website/Pages/Chef";
import Not from "./Website/Pages/Not";
import Blog from "./Website/Pages/Blog";
import Testimonial from "./Website/Pages/Testimonial";
import Contact from "./Website/Pages/Contact";
import Feature from "./Website/Pages/Feature";
import Dashboard from "./Admin/Apages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/team" element={<Chef />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/test" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />


          {/* not found page */}
          <Route path="*" element={<Not />} />


          {/* admin path */}
          <Route path="/dash" element={<Dashboard />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
