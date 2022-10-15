import React from 'react';
import LogoImg from "/src/assets/images/logo.png"

const footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4"><img
                                src={LogoImg}
                                height="30"
                                alt="Logo"
                                loading="lazy"
                            /></h6>
                                <p>2015 Online store asakhiy.uz: Home appliances, etc. Delivery of products is carried out in all regions. All rights .</p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">About company</h6>
                                <p>
                                    <a href="#!" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Processing policy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Public offer</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Pickup points</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Why choose us</h6>
                                <p>
                                    <a href="#!" className="text-reset">Payment and delivery</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Stock</a>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-1 col-xl-1 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Payment</h6>
                                <p><a href="#!" className="text-reset">Click.uz</a></p>
                                <p><a href="#!" className="text-reset">Payme</a></p>
                                <p><a href="#!" className="text-reset">Apelsin</a></p>
                                
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Socially media</h6>
                                <p><i className="fab fa-telegram-plane"></i> Telegram</p>
                                <p><i className="fab fa-instagram"></i> Instagram</p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact us</h6>
                                <p>your@gmail.com</p>
                                <p><a href="#">+998 99 506 69 00</a></p>
                                <p><a href="#" className="text-dark text-decoration-underline">Mirzo Ulug'bek tumani S blog 7 uy</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="cnt text-left border-top p-4">2022 Naturality Digital. All rights reseved</div>
            </footer>
        </>
    );
};

export default footer;