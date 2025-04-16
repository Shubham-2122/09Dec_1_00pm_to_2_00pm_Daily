import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Carddata() {

    const [card, setcard] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setcard(res.data)
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    card && card.map((card) => {
                        console.log(card)
                        return (
                            <div className='col-md-4'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={card.image} style={{height:"300px"}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title">{card.id}</h5>
                                        <h5 className="card-title">{card.title}</h5>
                                        <h5 className="card-title">{card.price}</h5>
                                        <p className="card-text">{card.description.slice(0,30)}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carddata
