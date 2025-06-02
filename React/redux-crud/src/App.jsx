import React from "react"
import Usetable from "./User/Usetable"
import Admintable from "./Admin/Admintable"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navabar from "./Navabar"

function App() {

  return (
    <>
 
      <BrowserRouter>
          <Navabar />
          <Routes>
            <Route path="/" element={<Usetable />}  />
            <Route path="/admin" element={<Admintable />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
