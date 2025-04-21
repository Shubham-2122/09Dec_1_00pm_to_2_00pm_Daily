import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <Header />
            <h1>Hello this About page</h1>
                <Link to="about1">About 1</Link>
                <Link to="about2">About 2</Link>

            <Outlet />
            <Footer />
        </div>
    )
}

export default About
