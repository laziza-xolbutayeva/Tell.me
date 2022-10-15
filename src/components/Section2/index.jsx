import React from 'react';
import Card from "../UI/Card";
import "./style.css"

function section2({obj}) {
    return (
        <section className="cnt">
          <h4 className="container my-5 py-5 w-100 d-flex justify-content-between">Popular goods <span className="text-primary">See all</span></h4>
          <div className="row mb-5">
            {obj.map((item,i)=>{
            return <div className="col-3"><Card item={item} key={item.id}/></div>
            })}
          </div>
      </section>
    );
}

export default section2;