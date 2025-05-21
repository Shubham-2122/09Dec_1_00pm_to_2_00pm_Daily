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
import BlogsMan from "./Admin/Apages/BlogsMan";
import Blogadd from "./Admin/Apages/Blogadd";
import Menumanage from "./Admin/Apages/Menumanage";
import Menupage from "./Admin/Apages/Menupage";
import Alogin from "./Admin/Apages/Alogin";


function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* website rout */}
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
          <Route path="/blogmanger" element={<BlogsMan />} />
          <Route path="/blogadd" element={<Blogadd />} />
          <Route path="/menuman" element={<Menumanage />} />
          <Route path="/menuadd" element={<Menupage />} />
          <Route path="Alogin" element={<Alogin />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
