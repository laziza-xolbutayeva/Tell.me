import React from 'react';
import "./style.css"

function index({item}) {
    return (
        <div className="PhoneCard">
            <img src={item.img} alt="tell" className="pt-5"/>
            <button className="Phone-price ms-2">{item.money}</button>
            <div className="d-flex align-items-end mt-5 px-2">
                <h5 className="Phone-title text-dark">{item.text}</h5>
                <div><i className="fas fa-star text-warning"></i>{item.rating}</div>
            </div>
        </div>
    );
}

export default index;