import React from 'react';
import "./style.css";

function Sales({ sales }) {
    console.log(sales);
    return (
        <div className="PhoneCard position-relative">
            <img src={sales.img} alt="tell" className="pt-5" />
            <img src={sales.saleImg} alt="Sale" className="saleImg" />
            <button className="Phone-price ms-2">{sales.money}</button>
            <p className="d-inline-block ms-4 text-decoration-line-through">{sales.sales}</p>
            <div className="d-flex align-saless-end mt-5 px-2">
                <h5 className="Phone-title text-dark">{sales.text}</h5>
                <div><i className="fas fa-star text-warning"></i>{sales.rating}</div>
            </div>
        </div>
    );
}

export default Sales;