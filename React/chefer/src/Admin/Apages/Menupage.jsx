import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Menupage() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        img: "",
        category: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const hadlesumit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/menu", form)
            console.log(res.data)
            redirect("/menuman")
            setform({
                id: "",
                name: "",
                img: "",
                category: ""
            })

        } catch (error) {
            console.log("api not found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <h1>Hello Menu add</h1>
            <div className="container">
                <div className="bg-light rounded h-100 p-5">
                    <form onSubmit={hadlesumit}>
                        <div className="row g-3">
                            <div className="col-6">
                                <input type="text" name='name' value={form.name} onChange={getchange} className="form-control bg-white border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                            </div>
                            <div className="col-6">
                                <select name='category' value={form.category} onChange={getchange} className="form-select bg-white border-0 px-4" aria-label="Default select example" style={{ height: 55 }}>
                                    <option hidden>select your category</option>
                                    <option value="breakfast">breakfast</option>
                                    <option value="lunch">lunch</option>
                                    <option value="Dinner">Dinner</option>

                                </select>
                            </div>
                            <div className="col-12">
                                <input type="url" value={form.img} onChange={getchange} name='img' className="form-control bg-white border-0 px-4" placeholder="Your Image" style={{ height: 55 }} />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">ADD Menu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Menupage
