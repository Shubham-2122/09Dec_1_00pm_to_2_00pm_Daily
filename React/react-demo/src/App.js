import React from "react"
import Css from "./Css/Css"
import Main_props from "./Props/Main_props"
import Main_State from "./state/Main_State"
import Form from "./form_hadling/Form"
import Form_object from "./form_hadling/Form_object"
import Main_effect from "./UseEffect/Main_effect"
import UseLife from "./lifecycle/UseLife"
import UseLifefun from "./lifecycle/UseLifefun"
import UseRedu from "./hooks/UseRedu"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./layout/Pages/Home"
import About from "./layout/Pages/About"
import Contact from "./layout/Pages/Contact"
import Help from "./layout/Pages/Help"
import About1 from "./layout/Pages/About1"
import About2 from "./layout/Pages/About2"
import Not from "./layout/Pages/Not"
import Driiling from "./Drilling/Driiling"
// import Hello from "./Jsx/Hello"
// import Class_compo from "./Compo/Class-compo"
// import Func_compo from "./Compo/Func-compo"

function App() {
    return (
        <BrowserRouter>
            <div>

                {/* <Class_compo /> */}
                {/* <Func_compo /> */}

                {/* jsx */}
                {/* <Hello /> */}

                {/* <Css /> */}

                {/* <Main_props /> */}

                {/* <Main_State /> */}

                {/* <Form /> */}
                {/* <Form_object /> */}

                {/* <Main_effect /> */}
                {/* <UseLife /> */}
                {/* <UseLifefun /> */}

                {/* <UseRedu /> */}

                <Routes >
                    <Route path="/" element={<Home />}  />
                    <Route path="/about" element={<About />} >
                        <Route path="about1" element={<About1 />} />
                        <Route path="about2" element={<About2 />}/>
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/context" element={<Driiling />} />


                    {/* not found call */}
                    <Route path="*" element={<Not />} />
                </Routes>


            </div>
        </BrowserRouter>
    )
}
export default App