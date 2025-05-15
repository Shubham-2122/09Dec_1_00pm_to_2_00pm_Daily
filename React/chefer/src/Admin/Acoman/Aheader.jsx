import React from 'react'
import { NavLink } from 'react-router-dom'

function Aheader() {
  return (
    <div>
      <div className="container-fluid bg-dark px-0">
                <div className="row gx-0 wow fadeIn" data-wow-delay="0.1s">
                    <div className="col-lg-3 bg-primary d-none d-lg-block">
                        <NavLink to="/dash" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 display-4 text-white text-uppercase">Chefer</h1>
                        </NavLink>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 d-none d-lg-flex bg-dark">
                            <div className="col-6 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2" />
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                            <div className="col-6 px-5 text-end">
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2" />
                                    <p className="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0 px-lg-5" style={{ background: '#111111' }}>
                            <NavLink to="" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary text-uppercase">Chefer</h1>
                            </NavLink>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/dash" className="nav-item nav-link ">Dashboard</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                    <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                                    <NavLink to="/team" className="nav-item nav-link">Chefs</NavLink>
                                      <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blogs</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="/blogmanger" className="dropdown-item">blogmanag</NavLink>
                                            <NavLink to="/blogadd" className="dropdown-item">Blog ADd</NavLink>
                                            
                                        </div>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="/feature" className="dropdown-item">Features</NavLink>
                                            <NavLink to="/blog" className="dropdown-item">Blog Post</NavLink>
                                            <NavLink to="/test" className="dropdown-item">Testimonial</NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                                <div className="d-none d-lg-flex align-items-center py-2">
                                    <a className="btn btn-outline-secondary btn-square rounded-circle ms-2" href>
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-outline-secondary btn-square rounded-circle ms-2" href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-outline-secondary btn-square rounded-circle ms-2" href>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Aheader
