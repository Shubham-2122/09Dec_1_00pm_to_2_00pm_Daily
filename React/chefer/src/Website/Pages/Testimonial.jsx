import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Helmet } from 'react-helmet'

function Testimonial() {
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
                        <h1 className="display-1 text-secondary text-center mb-0">Testimonial</h1>
                    </div>
                </div>
                {/* Hero End */}
                {/* Testimonial Start */}
                <div className="container-fluid p-0 py-5">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 500 }}>
                            <div className="h-100 position-relative overflow-hidden" style={{ borderTopLeftRadius: '50%' }}>
                                <img className="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 bg-dark p-5 overflow-hidden wow fadeIn" data-wow-delay="0.3s" style={{ borderBottomRightRadius: '50%' }}>
                            <div className="mb-5">
                                <h5 className="section-title">Testimonial</h5>
                                <h1 className="display-3 text-secondary mb-0">Our Client Say</h1>
                            </div>
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />Dolores sed duo clita tempor justo dolor
                                        et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                                        et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt />
                                        <div className="ps-4">
                                            <h5 className="text-secondary">Client Name</h5>
                                            <span className="small text-uppercase text-secondary" style={{ letterSpacing: 3 }}>Profession</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />Dolores sed duo clita tempor justo dolor
                                        et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                                        et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt />
                                        <div className="ps-4">
                                            <h5 className="text-secondary">Client Name</h5>
                                            <span className="small text-uppercase text-secondary" style={{ letterSpacing: 3 }}>Profession</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
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

export default Testimonial
