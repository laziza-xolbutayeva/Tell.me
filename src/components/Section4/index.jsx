import React from 'react';
import SaleTell from '/src/components/UI/Sales';

function sales({ sales }) {
    console.log(sales[1]);
    return (
        <div>
            <section className="cnt">
                <h4 className="container my-5 py-5 w-100 d-flex justify-content-between">Sales products <span className="text-primary">See all</span></h4>
                <div className="row mb-5">
                    {sales.map((item) => {
                        return <div className="col-3"><SaleTell sales={item} key={item.id}/></div>
                    })}
                </div>
            </section>


        </div>
    );
}

export default sales;