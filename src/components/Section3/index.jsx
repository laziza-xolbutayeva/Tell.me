import React from 'react';
import "./style.css";
import Box from "../UI/box";

function section3() {
    return (
        <section>
            <div className="cnt">
                <div className="d-flex justify-content-between my-4">
                    <div className="box text-light">
                        <h3 className="box-title">Now we can help yougfdjdh.</h3>
                        <p className="box-text">While neuomorphic designs have been 2020. It will not become a trend next year.</p>
                        <a href="#" className="box-link">Read more</a>
                    </div>
                    <Box obj={{ "title": "Free delivery", "bg": "#DAF9E8", "color": "black" }} />
                </div>
                <div className="d-flex justify-content-between">
                    <Box obj={{ "title": "Fast delivery", "bg": "#E5ECFF", "color": "black" }} />
                    <Box obj={{ "title": "Bonuses", "bg": "#23262B", "color": "white" }} />
                    <Box obj={{ "title": "Cooperation", "bg": "#FEF5E2", "color": "black" }} />
                </div>
            </div>

        </section>
    );
}

export default section3;