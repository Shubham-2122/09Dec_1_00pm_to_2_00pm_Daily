import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { creteuser } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function Adduser() {

    const dispatch = useDispatch()
    const redirect = useNavigate()

    const [user,setuser] = useState({
        id:"",
        name:"",
        email:"",
        phone:""
    })

    const getchange = (e)=>{
        setuser({
            ...user,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(user)
    }

    const adddata=(e)=>{
         e.preventDefault();
         dispatch(creteuser(user))
         setuser("")
         redirect("/")

    }


    return (
        <div className='container'>
              <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className='text-center'>USER data add</h1>
                        <form action="" onSubmit={adddata}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input type="text" name='name' value={user.name} onChange={getchange} className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your Email</label>
                                <input type="email" name='email' value={user.email} onChange={getchange}  className="form-control" id="eamil" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Enter your phone</label>
                                <input type="tel" name='phone' value={user.phone} onChange={getchange}  className="form-control" id="phone" placeholder="Enter your phone" />
                            </div>
                         
                            <div>
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Adduser
