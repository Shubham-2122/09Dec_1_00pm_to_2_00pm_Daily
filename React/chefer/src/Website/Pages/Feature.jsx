import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Helmet } from 'react-helmet'

function Feature() {
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
                        <h1 className="display-1 text-secondary text-center mb-0">Features</h1>
                    </div>
                </div>
                {/* Hero End */}
                {/* Feature Start */}
                <div className="container-fluid feature position-relative p-5 pb-0 mt-5">
                    <div className="row g-5 gb-5">
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="feature-item rounded text-center p-5">
                                <img className="img-fluid bg-white rounded-circle" src="img/feature-1.png" style={{ width: 150, height: 150 }} />
                                <h3 className="my-4">Best Chef</h3>
                                <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
                                    elitr duo vero amet amet stet</p>
                                <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="feature-item rounded text-center p-5">
                                <img className="img-fluid bg-white rounded-circle" src="img/feature-2.png" style={{ width: 150, height: 150 }} />
                                <h3 className="my-4">Menu Variations</h3>
                                <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
                                    elitr duo vero amet amet stet</p>
                                <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="feature-item rounded text-center p-5">
                                <img className="img-fluid bg-white rounded-circle" src="img/feature-3.png" style={{ width: 150, height: 150 }} />
                                <h3 className="my-4">Healthy Food</h3>
                                <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
                                    elitr duo vero amet amet stet</p>
                                <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-4 text-secondary mb-4"><span className="text-primary">30% Discount</span><br /> For This Summer</h1>
                            <a href className="btn btn-primary py-3 px-5">Order Now</a>
                        </div>
                    </div>
                </div>
                {/* Feature End */}
                {/* Instagram Start */}
                <div className="container-fluid position-relative instagram p-0 pt-5">
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

export default Feature
