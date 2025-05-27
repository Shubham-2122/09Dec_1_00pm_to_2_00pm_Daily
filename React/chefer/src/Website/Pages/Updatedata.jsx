import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import Header from '../Coman/Header';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Updatedata() {

    const redirect = useNavigate()

    useEffect(() => {
        fetdata()
    }, [])

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
    })

    const fetdata = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("Uid")}`)
            console.log(res.data)
            setform(res.data)
        } catch (error) {
            console.log("api data not Found")
        }
    }

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }


    const handlesubmit = async (e) => {
        e.preventDefault()

        try {
            if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
                console.log("Pls Enter your email and Password.. name!");
                toast.error("Pls Enter your email and Password.. name!")
                return false
            }

            const res = await axios.patch(`http://localhost:3000/user/${form.id}`, form)
            console.log(res.data)

            localStorage.setItem("Uname",form.name)

            if (res.status == 200) {
                setform({
                    name: "",
                    email: "",
                    password: "",
                })
                toast.success("Successfully edited")
                redirect("/")
            }

        } catch (error) {
            console.log("Api data not Found")
        }
    }


    return (
        <div>
            <Header />
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <form action="" onSubmit={handlesubmit}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Update account</h2>
                            <MDBInput value={form.name} name='name' onChange={getchange} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                            <div className='d-flex flex-row justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                            </div>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Update</MDBBtn>
                        </MDBCardBody>
                    </form>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Updatedata
