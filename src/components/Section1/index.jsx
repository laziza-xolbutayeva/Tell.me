import React from 'react';
import "./style.css"
import bg from "/src/assets/images/bg.png"

function index() {
    return (
        <section>
            <div className="secWrapper">
            <div className="container">
                <h2 className="Sec1__title">Now we can help you. Or you know less</h2>
                <p className="Sec1__text">Until the onset of the pandemic, Zara’s brick-and-mortar stores were the major source of revenue.</p>
                <button className="Sec1__btn p-2">Readmore <i className="far fa-arrow-alt-circle-right ms-4"></i></button>
            </div>
            </div>
        </section>
    );
}

export default index;