import React from "react"
import Usetable from "./User/Usetable"
import Admintable from "./Admin/Admintable"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navabar from "./Navabar"
import Adduser from "./User/Adduser"
import Updateuser from "./User/Updateuser"

function App() {

  return (
    <>
 
      <BrowserRouter>
          <Navabar />
          <Routes>
            <Route path="/" element={<Usetable />}  />
            <Route path="/add" element={<Adduser />} />
            <Route path="/admin" element={<Admintable />} />
            <Route path="/update/:id" element={<Updateuser />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
