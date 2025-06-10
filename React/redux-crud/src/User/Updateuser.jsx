import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slice/userSlice'

function Updateuser() {

    const { id } = useParams()
    const redirect = useNavigate()

    const { user, loading } = useSelector((state) => state.users)

    // console.log(user)

    const [showupdate, setshowupdate] = useState([])
    // console.log(id)

    useEffect(() => {
        const singleuser = user.filter((data) => data.id === id)
        console.log(singleuser[0])
        setshowupdate(singleuser[0])
    }, [])

    const datachnage = (e) => {
        setshowupdate({
            ...showupdate,
            [e.target.name]: e.target.value,
        })
        console.log(showupdate)
    }

    const dispatch = useDispatch()

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(updateuser(showupdate))
        redirect("/")
    }

    return (
        <div className='container'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className='text-center'>Update USER data </h1>
                        <form action="" >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input type="text" value={showupdate && showupdate.name} name='name' onChange={datachnage} className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your Email</label>
                                <input type="email" name='email' value={showupdate && showupdate.email} onChange={datachnage} className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Enter your phone</label>
                                <input type="tel" name='phone' value={showupdate && showupdate.phone} onChange={datachnage} className="form-control" id="phone" placeholder="Enter your phone" />
                            </div>

                            <div>
                                <input type="submit" onClick={handlesubmit}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updateuser
