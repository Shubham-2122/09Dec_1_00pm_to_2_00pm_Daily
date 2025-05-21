import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

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
                console.log("Pls Enter your email and Password..!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)
            if (res.data.length === 0) {
                console.log("Email does not match")
                return false
            }

            let admin = res.data[0]

            if (password !== admin.password) {
                console.log("Password does not match..!")
                return false
            }

            localStorage.setItem("Aid", admin.id)
            localStorage.setItem("Aname", admin.name)

            redirect("/dash");
            console.log("Alogin success");
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
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>


                                    <h2 className="fw-bold text-white mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput value={from.email} name='email' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={from.password} name='password' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                        Login
                                    </MDBBtn>



                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

                                    </div>

                                </MDBCardBody>
                            </MDBCard>
                        </form>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Alogin
