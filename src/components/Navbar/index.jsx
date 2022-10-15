import React from 'react';
import LogoImg from "/src/assets/images/logo.png"
import categoryImg from "/src/assets/images/category.svg"


function index() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow-0 bg-white">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src={LogoImg}
                                height="30"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        <button className="btn btn-light  border rounded-5 px-3 py-2"><img src={categoryImg} alt="category" className="me-1" />Category</button>
                    </div>
                    <div className="d-flex align-items-center w-50">
                        <ul className="navbar-nav me-auto ms-5 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-5" href="#">Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-5" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-5" href="#">Discounts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-5" href="#">Shop</a>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <a
                                className="link-secondary me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-search text-dark"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false" className="me-3"
                            >
                                <i className="far fa-user text-dark fs-5"></i>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                        <a className="link-secondary me-3" href="#">
                            <i className="fas fa-shopping-cart text-dark"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default index;