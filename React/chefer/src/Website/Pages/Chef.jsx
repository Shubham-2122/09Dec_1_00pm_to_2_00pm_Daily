import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Helmet } from 'react-helmet'

function Chef() {
    return (
        <div>
              <Helmet>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="js/main.js"></script>
            </Helmet>
            
            <Header />
            <div>
                {/* Hero Start */}
                <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
                    <div className="container wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-1 text-secondary text-center mb-0">Chefs</h1>
                    </div>
                </div>
                {/* Hero End */}
                {/* Team Start */}
                <div className="container-fluid p-5">
                    <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 700, margin: 'auto' }}>
                        <h5 className="section-title">Expert Chefs</h5>
                        <h1 className="display-3 mb-0">Let's Meet The Expert</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
                                    <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                                    <div className="team-overlay">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
                                    <h5 className="text-light">John Deo</h5>
                                    <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Master Chef</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
                                    <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                                    <div className="team-overlay">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
                                    <h5 className="text-light">John Deo</h5>
                                    <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Assistant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
                                    <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                                    <div className="team-overlay">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
                                    <h5 className="text-light">John Deo</h5>
                                    <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Instagram Start */}
                <div className="container-fluid position-relative instagram p-0 mt-5">
                    <a href className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle bg-white rounded-circle" style={{ width: 100, height: 100, zIndex: 1 }}>
                        <i className="fab fa-instagram fa-2x text-secondary" />
                    </a>
                    <div className="row g-0">
                        <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid" src="img/menu-2.jpg" alt />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.2s">
                            <img className="img-fluid" src="img/menu-3.jpg" alt />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                            <img className="img-fluid" src="img/menu-4.jpg" alt />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                            <img className="img-fluid" src="img/menu-5.jpg" alt />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                            <img className="img-fluid" src="img/menu-6.jpg" alt />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.6s">
                            <img className="img-fluid" src="img/menu-7.jpg" alt />
                        </div>
                    </div>
                </div>
                {/* Instagram End */}
            </div>
            <Footer />

        </div>
    )
}

export default Chef
