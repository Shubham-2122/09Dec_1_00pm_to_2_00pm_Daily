import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    }, [])

    const [from, setfrom] = useState({
        email: "",
        password: ""
    })


    const getchange = (e) => {
        setfrom({
            ...from,
            [e.target.name]: e.target.value
        })
        console.log(from)
    }

    const hadlesumit = async (e) => {
        e.preventDefault()

        try {

            const { email, password } = from

            if (!email.trim() || !password.trim()) {
                console.log("Pls Enter your email and Password..!");
                toast.error("Pls Enter your email and Password..!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)
            if (res.data.length === 0) {
                console.log("Email does not match")
                toast.error("Email does not match")
                return false
            }

            let user = res.data[0]

            if (password !== user.password) {
                console.log("Password does not match..!")
                toast.error("Password does not match..!")
                return false
            }

            localStorage.setItem("Uid", user.id)
            localStorage.setItem("Uname", user.name)

            redirect("/");
            console.log("login success");
            toast.success("login successfully..!")
        } catch (error) {
            console.log("api not found...", error)
        }
    }


    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <form action="" onSubmit={hadlesumit}>
                            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <MDBInput value={from.email} name='email' onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={from.password} name='password' onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                    <MDBBtn size='lg'>
                                        Login
                                    </MDBBtn>


                                </MDBCardBody>
                            </MDBCard>

                        </form>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Login
