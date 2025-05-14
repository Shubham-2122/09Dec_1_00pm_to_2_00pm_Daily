import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function BlogsMan() {

    const [blog, setblog] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blog")
        setblog(res.data)
    }

    return (
        <div>
            <Aheader />
            <h1 className='text-center'>hello Blog Manager</h1>

            <div className="container">
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th scope='col'>#id</th>
                            <td scope='col'>image</td>
                            <th scope='col'>date</th>
                            <th scope='col'>month</th>
                            <th scope='col'>Year</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {
                            blog && blog.map((data) => {
                              
                                return (
                                    <tr className='text-center'>
                                        <th scope='row'>{data.id}</th>
                                        <td><img src={data.img} style={{width:"50px"}} alt="" /></td>
                                        <td>{data.date}</td>
                                        <td>{data.month}</td>
                                        <td>{data.year}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </MDBTableBody>
                </MDBTable>
            </div>

        </div>
    )
}

export default BlogsMan
