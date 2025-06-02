import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showuser } from '../Slice/userSlice'

function Usetable() {

    const users = useSelector((state) => state.users.user)

    console.log(users)

    useEffect(() => {
        dispatch(showuser())
    }, [])

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className='text-center'>Hello Table data</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data) => {
                                console.log(data)
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Usetable
