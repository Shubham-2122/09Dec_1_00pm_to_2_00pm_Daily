import React, { useEffect, useState } from 'react'


function Usetable() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setuser(data)
            })
    }


    return (
        <div className='container'>
            <h1>hsajkdhk</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">address</th>
                        <th scope="col">company</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    user && user.map((data)=>{
                        const {name,id,email,address,company} = data
                         console.log(data)
                        return(
                            <tr>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                            <td>{company.name}</td>
                        </tr>
                        )
                    })
                   }
                </tbody>
            </table>

        </div>
    )
}

export default Usetable
