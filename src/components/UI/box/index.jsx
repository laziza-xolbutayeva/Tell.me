import React from 'react';
import "./style.css"

function index({obj}) {
    return (
        <div className="cards" style={{backgroundColor:`${obj.bg}`,color:`${obj.color}`}}>
            <h3>{obj.title}</h3>
            <p className="cards-text">I like to say that content designers give Meta a voice, and we do that by designing through words.</p>
            
        </div>
    );
}

export default index;